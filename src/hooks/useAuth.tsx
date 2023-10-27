import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const redirectLoginPage = () => {
    router.replace("/login");
  };

  const redirectSignupPage = () => {
    router.replace("/signup");
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

  useEffect(() => {
    if (status === "unauthenticated") redirectLoginPage();
    if (
      status === "authenticated" &&
      !isAuth() &&
      !unAuthPathCheck(router.pathname)
    )
      redirectSignupPage();
  }, [status]);

  return {
    session,
    status,
    redirectLoginPage,
    isAuth,
  };
};

export default useAuth;
