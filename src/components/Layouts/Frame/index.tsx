import { useAuth, useVh } from "@/hooks";
import { mq } from "@/styles/breakpoints";
import { css } from "@emotion/react";
import { type ComponentProps } from "react";
import FrameHeader from "./FrameHeader";
import styled from "@emotion/styled";
import FrameNavigator from "./FrameNavigator";
import { COLORS } from "@/styles/colors";
import { useRouter } from "next/router";

interface FrameProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

const fullScreens = ["/login", "/signup", "/bambi", "/talking"];

/** 모바일 환경 최적화 프레임 */
const Frame = ({ children, ...props }: FrameProps) => {
  const { vh } = useVh();
  const router = useRouter();
  const { status } = useAuth();

  const isFullScreen = (pathname: string) => {
    if (fullScreens.includes(pathname))
      return css`
        height: calc(${vh}px * 100);

        ${mq[3]} {
          height: 100vh;
        }
      `;
    return css`
      min-height: calc(${vh}px * 100);

      ${mq[3]} {
        min-height: 100vh;
      }
    `;
  };

  const backgroundStyle = css`
    max-width: 50rem;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;
    ${isFullScreen(router.pathname)}
  `;

  const getBgColor = (pathname: string) => {
    switch (pathname) {
      case "/landing":
        return bgColorStyle.login;
      default:
        return css``;
    }
  };

  return (
    <div css={[backgroundStyle, getBgColor(router.pathname)]} {...props}>
      <FrameHeader />
      <Container>{children}</Container>
      <FrameNavigator />
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const bgColorStyle = {
  login: css`
    background-color: ${COLORS.primary};
  `,
};
export default Frame;
