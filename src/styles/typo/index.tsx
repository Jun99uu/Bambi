import { SerializedStyles, css } from "@emotion/react";
import { bumseokRegular } from "./Bumseok";
import { graceRegular } from "./Grace";

export const TEXT_STYLE_SIZE = {
  logo1: "logo1",
  logo2: "logo2",
  title1: "title1",
  title2: "title2",
  title3: "title3",
  text1: "text1",
  text2: "text2",
  text3: "text3",
  caption: "caption",
  label: "label",
} as const;

type TypoType = {
  [key in keyof typeof TEXT_STYLE_SIZE]: SerializedStyles;
};

/**
 * 프로젝트 디자인 타이포 토큰
 */
export const TYPO: TypoType = {
  [TEXT_STYLE_SIZE.logo1]: css`
    ${graceRegular.style};
    font-size: 6.4rem;
  `,
  [TEXT_STYLE_SIZE.logo2]: css`
    ${graceRegular.style};
    font-size: 2.8rem;
  `,
  [TEXT_STYLE_SIZE.title1]: css`
    ${bumseokRegular.style};
    font-size: 2.5rem;
  `,
  [TEXT_STYLE_SIZE.title2]: css`
    ${bumseokRegular.style};
    font-size: 2rem;
  `,
  [TEXT_STYLE_SIZE.title3]: css`
    ${bumseokRegular.style};
    font-size: 1.8rem;
  `,
  [TEXT_STYLE_SIZE.text1]: css`
    ${bumseokRegular.style};
    font-size: 1.7rem;
  `,
  [TEXT_STYLE_SIZE.text2]: css`
    ${bumseokRegular.style};
    font-size: 1.6rem;
  `,
  [TEXT_STYLE_SIZE.text3]: css`
    ${bumseokRegular.style};
    font-size: 1.4rem;
  `,
  [TEXT_STYLE_SIZE.caption]: css`
    ${bumseokRegular.style};
    font-size: 1.3rem;
  `,
  [TEXT_STYLE_SIZE.label]: css`
    ${bumseokRegular.style};
    font-size: 1.2rem;
  `,
};
