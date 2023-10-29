import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "./breakpoints";

type Direction = "row" | "column";
type JustifyContent =
  | "between"
  | "around"
  | "evenly"
  | "center"
  | "start"
  | "end";
type AlignItems = "between" | "around" | "evenly" | "center" | "start" | "end";

const justifyContentMap: Record<JustifyContent, string> = {
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
  center: "center",
  start: "flex-start",
  end: "flex-end",
};

const alignItemsMap: Record<AlignItems, string> = {
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
  center: "center",
  start: "flex-start",
  end: "flex-end",
};

/** display flex injector */
export const flex = (
  direction: Direction,
  justifyContent: JustifyContent,
  alignItems: AlignItems,
  gap: number
) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContentMap[justifyContent]};
    align-items: ${alignItemsMap[alignItems]};
    gap: ${gap}rem;
  `;
};

/** tranform injector */
export const transform = (transformVal: string) => {
  return css`
    -webkit-transform: ${transformVal};
    -moz-transform: ${transformVal};
    -ms-transform: ${transformVal};
    transform: ${transformVal};
  `;
};

/** transition injector */
export const transition = (duration: string, animationType = "linear") => {
  return css`
    -o-transition: all ${duration} ${animationType};
    -webkit-transition: -webkit-transform ${duration};
    -ms-transition: all ${duration};
    -moz-transition: all ${duration};
    transition: all ${duration};
  `;
};

const paddingStyle = {
  strong: css`
    padding: 1rem 2.7rem;
  `,
  weak: css`
    padding: 1rem 0rem;
  `,
};

export const PageContainer = styled.div<{ weakPadding?: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  ${(props) => (props.weakPadding ? paddingStyle.weak : paddingStyle.strong)};
`;

export const pageStyleTop = css`
  padding-top: 10rem;

  ${mq[4]} {
    padding-top: 7.5rem;
  }
`;

export const pageStyleTopBottom = css`
  padding-top: 10rem;
  padding-bottom: 7rem;

  ${mq[4]} {
    padding-top: 7.5rem;
  }
`;
