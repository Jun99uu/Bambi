import { COLORS } from "@/styles/colors";
import { flex } from "@/styles/tokens";
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
      {title}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  width: 100%;
  height: 4.5rem;
  border-radius: 0.6rem;
  position: relative;
  ${flex("row", "center", "center", 0)};
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
