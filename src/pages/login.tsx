import { LoginButton } from "@/components/Buttons";
import { Logo } from "@/components/Login";
import { useAuth } from "@/hooks";
import { COLORS } from "@/styles/colors";
import { PageContainer, flex, pageStyleTop } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <PageContainer css={pageStyleTop}>
      <Logo />
      <ButtonsWrapper>
        <LoginButton socialType="KAKAO" onClick={() => signIn("kakao")} />
        <Caption>{`회원가입 시,\n개인정보 처리방침과 이용약관에 동의하게 됩니다.`}</Caption>
      </ButtonsWrapper>
    </PageContainer>
  );
};

const pageStyle = css`
  ${flex("column", "center", "center", 0)};
  padding-bottom: 30%;
`;

const ButtonsWrapper = styled.div`
  width: 80%;
  ${flex("column", "center", "center", 2)};
  position: absolute;
  bottom: 10%;
`;

const Caption = styled.span`
  ${TYPO.text2};
  color: ${COLORS.grey25};
  text-align: center;
  white-space: pre-line;
  line-height: 150%;
`;

export default Login;
