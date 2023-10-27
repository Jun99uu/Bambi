import { SerializedStyles, css, keyframes } from '@emotion/react';
import { transform } from './tokens';

// 인터랙션 저장소
// 애니메이션 추가 -> 해당 애니메이션 객체에 담기 -> injextAnimation 함수로 사용
const fadeInTopDown = keyframes`
    from{
        opacity: 0;
        top: -1rem;
    }
    to{
        opacity: 1;
        top: 0rem;
    }
`;

const fadeInTopDownTranslate = keyframes`
    from{
        opacity: 0;
        ${transform('translate(0px, -10px)')}
    }
    to{
        opacity: 1;
        ${transform('translate(0px, 0px)')}
    }
`;

const popUp = keyframes`
  0%{
    opacity: 0;
    ${transform('translate(0px, 1px)')}
  }
  90%{
    opacity: 1;
    ${transform('translate(0px, -0.5px) scale(1.01)')}
  }
  100%{
    opacity: 1;
    ${transform('translate(0px, 0px) scale(1)')}
  }
`;

const circleMoving = {
  top: keyframes`
    0%{
      opacity: 0;
      ${transform('rotate(180deg) translate(10%, -10%)')};
    }
    50%{
      opacity: 1;
      ${transform('rotate(180deg) translate(0%, -10%)')};
    }
    100%{
      opacity: 1;
      ${transform('rotate(180deg) translate(0%, 0%)')};
    }
  `,
  bottom: keyframes`
    0%{
      opacity: 0;
      ${transform('rotate(10deg) translate(10%, -10%)')};
    }
    50%{
      opacity: 1;
      ${transform('rotate(10deg) translate(0%, -10%)')};
    }
    100%{
      opacity: 1;
      ${transform('rotate(10deg) translate(0%, 0%)')};
    }
  `,
};

const loginTitlePopup = keyframes`
  0%{
    opacity: 0;
    top: 50%;
  }
  50%{
    opacity: 1;
    top: 50%;
  }
  100%{
    opacity: 1;
    top: 35%;
  }
`;

const loginButtonPopup = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0;
    top: 55%;
  }
  100%{
    opacity: 1;
    top: 65%;
  }
`;

const animations = {
  fadeInTopDown,
  fadeInTopDownTranslate,
  popUp,
  circleMovingTop: circleMoving.top,
  circleMovingBottom: circleMoving.bottom,
  loginTitlePopup,
  loginButtonPopup,
};

export const injectAnimation = (
  animation: keyof typeof animations,
  duration = '1.5s',
  type = 'linear',
  delay = '0s',
  relative = false,
): SerializedStyles => {
  const newAnimation = css`
    animation: ${animations[animation]} ${duration} ${type} ${delay} forwards;
    ${relative &&
    css`
      position: relative;
    `};
  `;

  return newAnimation;
};
