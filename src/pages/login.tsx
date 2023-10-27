import { LoginButton } from "@/components/Buttons";
import { useAuth } from "@/hooks";
import { signIn, signOut } from "next-auth/react";

const Login = () => {
  const { session, isAuth } = useAuth();

  return (
    <>
      <LoginButton socialType="KAKAO" onClick={() => signIn("kakao")} />
      <button onClick={() => signOut()}>logout</button>
    </>
  );
};

export default Login;
