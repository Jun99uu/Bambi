import NextAuth, { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAK_CLIENT_ID!,
      clientSecret: process.env.KAKAK_CLIENT_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);
