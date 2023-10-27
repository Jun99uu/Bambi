import { COLORS } from "@/styles/colors";
import { flex, transform } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import styled from "@emotion/styled";
import Footprint from "@/assets/svg/icon/footprint.svg";
import { css } from "@emotion/react";
import { injectAnimation } from "@/styles/animations";
import { ComponentProps } from "react";

const Logo = (props: ComponentProps<"div">) => {
  return (
    <Wrapper {...props}>
      <Title>BAMBI</Title>
      <Subtitle>당신의 감정을 그려주는 고양이</Subtitle>
      {printStyles.map((style, idx) => (
        <Footprint css={style} key={idx} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${flex("column", "center", "center", 0.2)};
  position: relative;
`;

const Title = styled.span`
  ${TYPO.logo1};
  color: ${COLORS.primary};
`;

const Subtitle = styled.span`
  ${TYPO.title2};
  color: ${COLORS.primary};
`;

const printStyles = [
  css`
    width: 2rem;
    height: auto;
    position: absolute;
    top: -1rem;
    right: 10%;
    opacity: 0;
    ${transform("rotate(-30deg)")};
    ${injectAnimation("footPrinting", "2s", "ease", "1s")}
  `,
  css`
    width: 2.2rem;
    height: auto;
    position: absolute;
    top: 2rem;
    right: 0%;
    opacity: 0;
    ${injectAnimation("footPrinting", "2s", "ease", "0s")};
  `,
];

export default Logo;
