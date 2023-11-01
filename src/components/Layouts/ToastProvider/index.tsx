import { ToastTheme } from "@/atoms/toastState";
import styled from "@emotion/styled";
import toastPositive from "@/assets/images/toast_positive.png";
import toastNegative from "@/assets/images/toast_negative.png";
import { css } from "@emotion/react";
import { COLORS } from "@/styles/colors";
import { TYPO } from "@/styles/typo";
import Image from "next/image";
import { transform } from "@/styles/tokens";
import { useToast } from "@/hooks";
import { injectAnimation } from "@/styles/animations";

const Toast = () => {
  const { isMount, theme, content, isTransition } = useToast();
  const getImage = (theme: ToastTheme) => {
    switch (theme) {
      case "positive":
        return toastPositive;
      case "negative":
        return toastNegative;
      default:
        return toastPositive;
    }
  };

  if (isMount) {
    return (
      <ToastBox
        css={isTransition && injectAnimation("toastClose", "1s", "ease")}
      >
        <ToastInnerWrapper css={toastStyles[theme]}>
          <span>{content}</span>
          <Image
            src={getImage(theme)}
            alt={theme}
            width={100}
            height={100}
            css={imageStyle}
          />
        </ToastInnerWrapper>
      </ToastBox>
    );
  }
  return <></>;
};

const ToastBox = styled.div`
  position: fixed;
  z-index: 99;
  top: 2rem;
  left: 50%;
  opacity: 0;
  ${transform("translate(-50%, 0%)")};
  ${injectAnimation("toastOpen", "1s", "ease")};
`;

const ToastInnerWrapper = styled.div`
  width: 32rem;
  padding: 2rem;
  border-radius: 1.5rem;
  ${TYPO.text2};
  text-align: start;
  white-space: pre-line;

  position: relative;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const toastStyles = {
  positive: css`
    background-color: ${COLORS.white};
    color: ${COLORS.grey25};
  `,
  negative: css`
    background-color: ${COLORS.grey2};
    color: ${COLORS.white};
  `,
};

const imageStyle = css`
  position: absolute;
  bottom: 0rem;
  right: 0rem;

  height: 40%;
  width: auto;
`;

export default Toast;
