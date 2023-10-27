import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      user_id: string;
      name: string | null;
      nickname: string | null;
      photo: string | null;
      job: string | null;
      taste: string | null;
      provider_id: string | null;
    } & DefaultSession["user"];
  }
}
