import { css } from '@emotion/react';
import { useEffect, useMemo, useState } from 'react';

/** 리사이징 이벤트에 따라 변하는 vh 가져오는 훅 (불필요한 스크롤 생기는 이슈 방지) */
const useVh = () => {
  const [vh, setVh] = useState(0);

  const mobileScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    setVh(vh);
  };

  const fullPageStyle = useMemo(
    () => css`
      width: 100%;
      height: calc(${vh}px * 100);
    `,
    [vh],
  );

  useEffect(() => {
    mobileScreenSize();
    window.addEventListener('resize', () => mobileScreenSize());
    return () => {
      window.removeEventListener('resize', mobileScreenSize);
    };
  }, []);

  return { vh, fullPageStyle };
};

export default useVh;
