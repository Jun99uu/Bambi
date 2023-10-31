import styled from "@emotion/styled";
import { TYPO } from "@/styles/typo";
import { COLORS } from "@/styles/colors";
import { flex, transform } from "@/styles/tokens";
import { css } from "@emotion/react";
import { mq } from "@/styles/breakpoints";

interface Props {
  mypageHandler?: () => void;
}

const TitleHeader = ({ mypageHandler }: Props) => {
  return (
    <HeaderWrapper>
      <Logo>BAMBI</Logo>
    </HeaderWrapper>
  );
};

const hovering = css`
  position: relative;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  min-width: 32rem;
  height: 6rem;
  ${flex("row", "between", "center", 0)};
  position: fixed;
  top: 0px;
  left: 50%;
  ${transform("translate(-50%, 0%)")};

  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  padding: 0rem 2.7rem;
  background-color: ${COLORS.white};
  z-index: 10;

  ${mq[4]} {
    height: 5rem;
  }
`;

const Logo = styled.span`
  ${TYPO.title1};
  font-weight: 900;
  color: ${COLORS.primary};
  cursor: pointer;

  ${hovering}
`;

const iconStyle = css`
  cursor: pointer;
  ${hovering}
`;

export default TitleHeader;
