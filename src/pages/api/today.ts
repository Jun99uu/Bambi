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
      .eq("user_id", user_id)
      .order("created_at", { ascending: false }) // 내림차순으로 정렬
      .limit(1); // 가장 최신의 데이터만 가져오기

    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
      const latestDate = new Date(data[0].created_at);
      const today = new Date();

      // 시간, 분, 초, 밀리초 정보를 무시하고 날짜만 비교
      const isLatestToday =
        latestDate.getDate() === today.getDate() &&
        latestDate.getMonth() === today.getMonth() &&
        latestDate.getFullYear() === today.getFullYear();

      return res.status(200).json({ isLatestToday });
    } else {
      // 데이터가 없는 경우, false 반환
      return res.status(200).json({ isLatestToday: false });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
}
