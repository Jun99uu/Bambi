import { css } from '@emotion/react';
import { mq } from './breakpoints';
import { COLORS } from './colors';
import { transition } from './tokens';

const reset = css`
  html,
  body {
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${COLORS.white};
    font-size: 9px;

    ${transition('0.5s', 'linear')};

    ${mq[2]} {
      font-size: 9px;
    }
    ${mq[4]} {
      font-size: 10px;
    }
    ${mq[6]} {
      font-size: 10px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`;

export default reset;
