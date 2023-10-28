import { useRouter } from "next/router";
import { NavHeader, TitleHeader } from "../Header";
import { useHeader } from "@/hooks";
import { signOut } from "next-auth/react";

const FrameHeader = () => {
  const router = useRouter();
  const { headerTitle } = useHeader();

  const handleBack = () => {
    router.back();
  };

  const handleMyPage = () => {
    router.push("/mypage");
  };

  const handleSignoutBack = async () => {
    await signOut();
    router.replace("/login");
  };

  switch (router.pathname) {
    case "/login":
      return <></>;
    case "/":
      return <TitleHeader mypageHandler={handleMyPage} />;
    case "/signup":
      return <NavHeader title={headerTitle} onBack={handleSignoutBack} />;
    default:
      return <NavHeader title={headerTitle} onBack={handleBack} />;
  }
};

export default FrameHeader;
