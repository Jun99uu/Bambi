import { injectAnimation } from "@/styles/animations";
import { COLORS } from "@/styles/colors";
import { flex, transform } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  width: 100%;
  ${flex("column", "center", "start", 1)};
  position: relative;
  ${injectAnimation("fadeInTopDown", "0.8s", "linear")};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    ${transform("translate(0rem, -0.5rem)")};
  }

  &:active {
    ${transform("translate(0rem, 0.1rem)")};
  }
`;

export const itemStyles = {
  main: css`
    width: 100%;
    height: 27rem;
    border-radius: 1rem;
    object-fit: cover;
    object-position: center;
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
    ${TYPO.caption};
    color: ${COLORS.grey25};
    text-align: start;
  `,
};
