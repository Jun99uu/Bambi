import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const redirectLoginPage = () => {
    router.replace("/login");
  };

  useEffect(() => {
    if (status === "unauthenticated") redirectLoginPage();
  }, [status]);

  return {
    session,
    status,
    redirectLoginPage,
  };
};

export default useAuth;
