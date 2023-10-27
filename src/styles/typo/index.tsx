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

export const TEXT_STYLE_WEIGHT = {
  Eb: "Eb",
  Bd: "Bd",
  Sb: "Sb",
  Md: "Md",
  Reg: "Reg",
  Lg: "Lg",
} as const;

type TextStyle = {
  [key in keyof typeof TEXT_STYLE_WEIGHT]?: SerializedStyles;
};

type TypoType = {
  [key in keyof typeof TEXT_STYLE_SIZE]: TextStyle;
};

/**
 * 프로젝트 디자인 타이포 토큰
 */
export const TYPO: TypoType = {
  [TEXT_STYLE_SIZE.logo1]: {
    [TEXT_STYLE_WEIGHT.Reg]: css`
      ${graceRegular.style};
      font-size: 6.4rem;
    `,
  },
  [TEXT_STYLE_SIZE.logo2]: {
    [TEXT_STYLE_WEIGHT.Reg]: css`
      ${graceRegular.style};
      font-size: 2.8rem;
    `,
  },
  [TEXT_STYLE_SIZE.title1]: {
    [TEXT_STYLE_WEIGHT.Eb]: css`
      ${bumseokRegular.style};
      font-size: 5rem;
    `,
    [TEXT_STYLE_WEIGHT.Sb]: css`
      ${bumseokRegular.style};
      font-size: 2.4rem;
    `,
  },
  [TEXT_STYLE_SIZE.title2]: {
    [TEXT_STYLE_WEIGHT.Bd]: css`
      ${bumseokRegular.style};
      font-size: 2rem;
    `,
    [TEXT_STYLE_WEIGHT.Sb]: css`
      ${bumseokRegular.style};
      font-size: 2rem;
    `,
    [TEXT_STYLE_WEIGHT.Md]: css`
      ${bumseokRegular.style};
      font-size: 2rem;
    `,
    [TEXT_STYLE_WEIGHT.Reg]: css`
      ${bumseokRegular.style};
      font-size: 2rem;
    `,
    /** 얘는 조금 특별하게 굵기 차이가 아닌 간격차이로 인지해주세용 */
    [TEXT_STYLE_WEIGHT.Lg]: css`
      ${bumseokRegular.style};
      font-size: 2rem;
    `,
  },
  [TEXT_STYLE_SIZE.title3]: {
    [TEXT_STYLE_WEIGHT.Sb]: css`
      ${bumseokRegular.style};
      font-size: 1.8rem;
    `,
    [TEXT_STYLE_WEIGHT.Md]: css`
      ${bumseokRegular.style};
      font-size: 1.8rem;
    `,
    [TEXT_STYLE_WEIGHT.Reg]: css`
      ${bumseokRegular.style};
      font-size: 1.8rem;
    `,
  },
  [TEXT_STYLE_SIZE.text1]: {
    [TEXT_STYLE_WEIGHT.Sb]: css`
      ${bumseokRegular.style};
      font-size: 1.7rem;
    `,
    [TEXT_STYLE_WEIGHT.Md]: css`
      ${bumseokRegular.style};
      font-size: 1.7rem;
    `,
    [TEXT_STYLE_WEIGHT.Reg]: css`
      ${bumseokRegular.style};
      font-size: 1.7rem;
    `,
    /** 얘는 조금 특별하게 굵기 차이가 아닌 간격차이로 인지해주세용 */
    [TEXT_STYLE_WEIGHT.Lg]: css`
      ${bumseokRegular.style};
      font-size: 1.7rem;
    `,
  },
  [TEXT_STYLE_SIZE.text2]: {
    [TEXT_STYLE_WEIGHT.Sb]: css`
      ${bumseokRegular.style};
      font-size: 1.6rem;
    `,
    [TEXT_STYLE_WEIGHT.Md]: css`
      ${bumseokRegular.style};
      font-size: 1.6rem;
    `,
    [TEXT_STYLE_WEIGHT.Reg]: css`
      ${bumseokRegular.style};
      font-size: 1.6rem;
    `,
  },
  [TEXT_STYLE_SIZE.text3]: {
    [TEXT_STYLE_WEIGHT.Eb]: css`
      ${bumseokRegular.style};
      font-size: 1.4rem;
    `,
    [TEXT_STYLE_WEIGHT.Reg]: css`
      ${bumseokRegular.style};
      font-size: 1.4rem;
    `,
    [TEXT_STYLE_WEIGHT.Lg]: css`
      ${bumseokRegular.style};
      font-size: 1.4rem;
    `,
  },
  [TEXT_STYLE_SIZE.caption]: {
    [TEXT_STYLE_WEIGHT.Md]: css`
      ${bumseokRegular.style};
      font-size: 2.8rem;
    `,
    [TEXT_STYLE_WEIGHT.Reg]: css`
      ${bumseokRegular.style};
      font-size: 1.7rem;
    `,
  },
  [TEXT_STYLE_SIZE.label]: {
    [TEXT_STYLE_WEIGHT.Md]: css`
      ${bumseokRegular.style};
      font-size: 1.2rem;
    `,
    [TEXT_STYLE_WEIGHT.Reg]: css`
      ${bumseokRegular.style};
      font-size: 1.2rem;
    `,
  },
};
