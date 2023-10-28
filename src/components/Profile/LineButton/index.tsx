import { COLORS } from "@/styles/colors";
import { TYPO } from "@/styles/typo";
import styled from "@emotion/styled";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  title: string;
}

const LineContent = ({ title, ...props }: Props) => {
  return (
    <LineWrapper {...props}>
      <span>{title}</span>
    </LineWrapper>
  );
};

const LineWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  ${TYPO.title3};
  color: ${COLORS.grey3};
  cursor: pointer;
`;

export default LineContent;
