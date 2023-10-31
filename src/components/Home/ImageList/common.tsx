import { injectAnimation } from "@/styles/animations";
import { COLORS } from "@/styles/colors";
import { flex } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  width: 100%;
  ${flex("column", "center", "start", 1)};
  position: relative;
  ${injectAnimation("fadeInTopDown", "0.8s", "linear")};
`;

export const itemStyles = {
  main: css`
    width: 100%;
    height: 27rem;
    border-radius: 1rem;
  `,
  sub: css`
    width: 100%;
    height: 3rem;
    border-radius: 0.6rem;
  `,
  desc: css`
    ${TYPO.text2};
    color: ${COLORS.grey25};
    text-align: start;
  `,
  date: css`
    ${TYPO.text3};
    color: ${COLORS.grey25};
    text-align: start;
  `,
};
