import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Direction = 'row' | 'column';
type JustifyContent =
  | 'between'
  | 'around'
  | 'evenly'
  | 'center'
  | 'start'
  | 'end';
type AlignItems = 'between' | 'around' | 'evenly' | 'center' | 'start' | 'end';

const justifyContentMap: Record<JustifyContent, string> = {
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
};

const alignItemsMap: Record<AlignItems, string> = {
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
};

/** display flex injector */
export const flex = (
  direction: Direction,
  justifyContent: JustifyContent,
  alignItems: AlignItems,
  gap: number,
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
export const transition = (duration: string, animationType = 'linear') => {
  return css`
    -o-transition: all ${duration} ${animationType};
    -webkit-transition: -webkit-transform ${duration};
    -ms-transition: all ${duration};
    -moz-transition: all ${duration};
    transition: all ${duration};
  `;
};

export const PageContainer = styled.div`
  width: 100%;
  padding: 1rem 2.7rem;
`;
