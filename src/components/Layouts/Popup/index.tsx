import { ComponentProps, useRef } from "react";
import ReactPortal from "../Portal";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useOutsideClose, useVh } from "@/hooks";
import { mq } from "@/styles/breakpoints";
import { flex } from "@/styles/tokens";
import { injectAnimation } from "@/styles/animations";
import { TYPO } from "@/styles/typo";
import { COLORS } from "@/styles/colors";

interface Props extends ComponentProps<"div"> {
  title: string;
  buttonContents: string[];
  buttonHandler: () => void;
  isTransition: boolean;
  handleClose: () => void;
}

const Popup = ({
  title,
  buttonContents,
  buttonHandler,
  isTransition,
  handleClose,
  ...props
}: Props) => {
  const { vh } = useVh();
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClose(ref, handleClose);

  const backgroundStyle = css`
    width: 100vw;
    height: calc(${vh}px * 100);
    background-color: #00000039;
    position: fixed;
    z-index: 99;
    top: 0px;
    left: 0px;
    ${flex("column", "center", "center", 0)};
    ${injectAnimation("modalBackgroundAppear", "0.5s", "ease")};

    ${mq[3]} {
      height: 100vh;
    }
  `;

  return (
    <ReactPortal wrapperId="popup">
      <div
        css={[
          backgroundStyle,
          isTransition &&
            injectAnimation("modalBackgroundDisappear", "0.5s", "ease"),
        ]}
        {...props}
      >
        <PopupBox
          ref={ref}
          css={[
            isTransition && injectAnimation("modalDisappear", "0.5s", "ease"),
          ]}
        >
          <Title>{title}</Title>
          <ButtonWrapper>
            <button
              onClick={handleClose}
              css={[buttonStyles.common, buttonStyles.cancel]}
            >
              {buttonContents[0]}
            </button>
            <button
              onClick={buttonHandler}
              css={[buttonStyles.common, buttonStyles.approve]}
            >
              {buttonContents[1]}
            </button>
          </ButtonWrapper>
        </PopupBox>
      </div>
    </ReactPortal>
  );
};

const PopupBox = styled.div`
  width: 30rem;
  height: 14rem;
  background-color: white;
  border-radius: 2rem;
  ${flex("column", "center", "center", 2)};
  ${injectAnimation("modalAppear", "0.5s", "ease")};
`;

const Title = styled.span`
  ${TYPO.text2};
  color: ${COLORS.grey25};
  text-align: center;
  white-space: pre-line;
  line-height: 150%;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  ${flex("row", "center", "center", 1)};
`;

const buttonStyles = {
  common: css`
    width: 10rem;
    height: 4rem;
    border-radius: 5rem;
    border: none;
    outline: none;
    cursor: pointer;
  `,
  cancel: css`
    background-color: ${COLORS.grey5};
    color: white;
  `,
  approve: css`
    background-color: ${COLORS.blue};
    color: white;
  `,
};

export default Popup;
