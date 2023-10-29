import { ComponentProps } from "react";
import ReactPortal from "../Portal";
import { css } from "@emotion/react";
import { useVh } from "@/hooks";
import { mq } from "@/styles/breakpoints";
import { flex } from "@/styles/tokens";
import { injectAnimation } from "@/styles/animations";
import Lottie from "lottie-react";
import catloading from "@/assets/lotties/catloading.json";

interface Props extends ComponentProps<"div"> {
  isTransition?: boolean;
}

const Loading = ({ isTransition, ...props }: Props) => {
  const { vh } = useVh();

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
        <Lottie animationData={catloading} css={lottieStyle} />
      </div>
    </ReactPortal>
  );
};

const lottieStyle = css`
  width: 20rem;
  height: 20rem;
`;

export default Loading;
