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

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { image, desc } = req.body;

  if (!image || !desc) {
    return res.status(400).json({ error: "Missing required parameters." });
  }

  try {
    const { data, error } = await supabase.from("images").insert({
      user_id: session.user.user_id,
      url: image,
      description: desc,
    });

    if (error) {
      throw error;
    }

    return res.status(200).json("update success");
  } catch (error) {
    return res.status(400).json({ error });
  }
}
