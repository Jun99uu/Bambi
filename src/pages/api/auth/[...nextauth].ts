import NextAuth, { NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import { supabase } from "@/utils/supabase";
import { v4 as uuidv4 } from "uuid";

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider) {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("provider_id", account.providerAccountId);

        if (error) {
          console.error("Error fetching user:", error);
          return token;
        }

        if (data.length === 0) {
          const { error } = await supabase.from("users").insert([
            {
              user_id: uuidv4(),
              name: token.name,
              photo: token.picture,
              provider_id: account.providerAccountId,
            },
          ]);

          if (error) {
            console.error("Error creating user:", error);
          }
        }
      }

      return token;
    },
    async session({ session, token }) {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("provider_id", token.sub);

      if (error) {
        console.error("Error fetching session user:", error);
        return session;
      }

      session.user = data[0];
      return session;
    },
  },
};

export default NextAuth(authOptions);
