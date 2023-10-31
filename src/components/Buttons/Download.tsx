import { COLORS } from "@/styles/colors";
import { flex, transition } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"a"> {
  title: string;
  fileName: string;
  url: string;
}

const DownloadButton = ({ title, fileName, url, ...props }: Props) => {
  return (
    <ButtonWrapper
      css={buttonStyles}
      download={fileName}
      href={url}
      title={fileName}
      target="_blank"
      {...props}
    >
      <span>{title}</span>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.a`
  width: 100%;
  height: 55px;
  border-radius: 5rem;
  position: relative;
  ${flex("row", "center", "center", 0)};
  border: none;
  ${TYPO.title2};
  ${transition("0.5s")};

  &:disabled {
    cursor: default;
  }
`;

const buttonStyles = css`
  background-color: ${COLORS.primary};
  color: white;
`;

export default DownloadButton;
