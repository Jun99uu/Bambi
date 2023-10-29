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

  if (req.method !== "DELETE") {
    return res.status(405).end();
  }

  try {
    const { error } = await supabase
      .from("users")
      .delete()
      .eq("user_id", session.user.user_id);

    if (error) {
      throw error;
    }

    return res.status(200).json("User deleted successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
}
