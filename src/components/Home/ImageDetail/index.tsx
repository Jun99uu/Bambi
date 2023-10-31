import { ComponentProps, useRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useOutsideClose, useVh } from "@/hooks";
import { mq } from "@/styles/breakpoints";
import { flex } from "@/styles/tokens";
import { injectAnimation } from "@/styles/animations";
import { TYPO } from "@/styles/typo";
import { COLORS } from "@/styles/colors";
import ReactPortal from "@/components/Layouts/Portal";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { BasicButton } from "@/components/Buttons";
import { downloadImage } from "@/utils/utilzeImages";

interface Props extends ComponentProps<"div"> {
  img: string;
  date: string;
  emotion: string;
  isTransition: boolean;
  handleClose: () => void;
}

const ImageDetail = ({
  img,
  date,
  emotion,
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
    <ReactPortal wrapperId="image-detail-popup">
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
          <Image src={img} alt="img" width={100} height={100} css={imgStyle} />
          <Circle onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} css={xStyle} />
          </Circle>
          <BasicButton
            title="이미지 저장하기"
            onClick={() => downloadImage(img, `${date}_${emotion}`)}
          />
        </PopupBox>
      </div>
    </ReactPortal>
  );
};

const PopupBox = styled.div`
  width: 90%;
  min-width: 45vw;
  max-width: 60vw;
  padding: 1rem;
  background-color: white;
  border-radius: 2rem;
  ${flex("column", "center", "center", 0.8)};
  ${injectAnimation("modalAppear", "0.5s", "ease")};
`;

const imgStyle = css`
  width: 100%;
  height: 65vh;
  object-fit: cover;
  object-position: center;
  border-radius: 1.5rem;
`;

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100rem;
  background-color: white;
  position: absolute;
  top: 2rem;
  right: 2rem;
  ${flex("row", "center", "center", 0)};
`;

const xStyle = css`
  font-size: 2rem;
  color: ${COLORS.grey2};
  cursor: pointer;
`;

const buttonStyle = css``;

export default ImageDetail;
