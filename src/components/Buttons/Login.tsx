import { flex, transform } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SocialType } from "Auth";
import { ComponentProps } from "react";
import KakaoIcon from "@/assets/svg/social/Kakao.svg";

interface Props extends ComponentProps<"button"> {
  socialType: SocialType;
}

const Login = ({ socialType, ...props }: Props) => {
  const getTitle = () => {
    switch (socialType) {
      case "KAKAO":
        return "Login with Kakao";
      case "GOOGLE":
        return "Signin with Google";
    }
  };

  const Icon = (props: ComponentProps<"svg">) => {
    switch (socialType) {
      case "KAKAO":
        return <KakaoIcon {...props} />;
      case "GOOGLE":
        return <KakaoIcon {...props} />;
      default:
        return <></>;
    }
  };

  return (
    <ButtonWrapper css={buttonStyles[socialType]} {...props}>
      <Icon css={iconStyle} />
      <span>{getTitle()}</span>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  width: 100%;
  height: 4.5rem;
  border-radius: 0.6rem;
  position: relative;
  border: none;
  ${TYPO.text2};
  ${flex("row", "center", "center", 0)};
`;

const buttonStyles = {
  KAKAO: css`
    background-color: #fee500;
    color: black;
  `,
  GOOGLE: css`
    background-color: white;
    color: "#ffffff9f";
  `,
};

const iconStyle = css`
  position: absolute;
  left: 7%;
  top: 50%;
  ${transform("translate(0, -50%)")};
`;

export default Login;
