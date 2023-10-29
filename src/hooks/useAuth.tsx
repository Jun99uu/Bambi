import AuthApi from "@/apis/auth";
import { AdditionalData } from "Auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuth = () => {
  const authApi = new AuthApi();
  const { data: session, status } = useSession();
  const router = useRouter();

  const redirectLoginPage = () => {
    router.replace("/login");
  };

  const redirectSignupPage = () => {
    router.replace("/signup");
  };

  const redirectHomePage = () => {
    router.replace("/");
  };

  const unAuthPathCheck = (pathname: string) => {
    return pathname === "/login" || pathname === "/signup";
  };

  /**
   * 현재 회원가입까지 모두 완료한 회원인가
   */
  const isAuth = () => {
    if (status === "authenticated") {
      return Object.values(session.user).every((value) => value !== null);
    }
    return false;
  };

  const signupAdditionalInfo = async (data: AdditionalData) => {
    try {
      await authApi.signup(data);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const removeAccount = async () => {
    try {
      await authApi.removeAccount();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") redirectLoginPage();
    if (status === "authenticated" && !isAuth()) redirectSignupPage();
    if (
      status === "authenticated" &&
      isAuth() &&
      unAuthPathCheck(router.pathname)
    )
      redirectHomePage();
  }, [status]);

  return {
    session,
    status,
    redirectLoginPage,
    redirectHomePage,
    signupAdditionalInfo,
    removeAccount,
  };
};

export default useAuth;
