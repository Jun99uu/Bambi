import { COLORS } from "@/styles/colors";
import { flex } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  ${flex("column", "start", "start", 4)};
`;

export const captionStyles = {
  default: css`
    color: ${COLORS.grey2};
  `,
  highlight: css`
    color: ${COLORS.blue};
  `,
};

export const Caption = styled.span`
  ${TYPO.text2};
  text-align: center;
  ${captionStyles.default};
`;
