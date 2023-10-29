import { COLORS } from "@/styles/colors";
import { flex, transition } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  title: string;
  buttonType?: "default" | "grey" | "blue";
}

const Basic = ({ title, buttonType = "default", ...props }: Props) => {
  return (
    <ButtonWrapper css={buttonStyles[buttonType]} {...props}>
      <span>{title}</span>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
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

const buttonStyles = {
  default: css`
    background-color: ${COLORS.primary};
    color: white;
  `,
  grey: css`
    background-color: ${COLORS.grey3};
    color: white;
  `,
  blue: css`
    background-color: ${COLORS.blue};
    color: white;
  `,
};

export default Basic;
