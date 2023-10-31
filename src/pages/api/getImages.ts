import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/utils/supabase";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(405).end();
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { user_id } = session.user;

  try {
    const { data, error } = await supabase
      .from("images")
      .select("*")
      .eq("user_id", user_id);

    if (error) {
      throw error;
    }

    if (data) {
      return res.status(200).json(data);
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
}
