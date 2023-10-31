import { COLORS } from "@/styles/colors";
import { flex } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import styled from "@emotion/styled";
import karlo from "@/assets/images/karlo.png";
import Image from "next/image";
import { ComponentProps } from "react";
import { css } from "@emotion/react";

const KarloPolicy = (props: ComponentProps<"div">) => {
  return (
    <Wrapper {...props}>
      <span>Powered by</span>
      <Logo>
        <Image
          src={karlo}
          alt="karlo"
          width={100}
          height={100}
          css={logoStyle}
        />
        <span>Karlo</span>
      </Logo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${flex("row", "center", "center", 1)};
  ${TYPO.text3};
  color: ${COLORS.grey25};
`;

const Logo = styled.div`
  ${flex("row", "center", "center", 0.5)};
`;

const logoStyle = css`
  width: 1.5rem;
  height: auto;
`;

export default KarloPolicy;
