import styled from "@emotion/styled";
import Image from "next/image";
import devocean from "@/assets/images/devocean.png";
import { css } from "@emotion/react";
import { ComponentProps } from "react";

const DevoceanPolicy = (props: ComponentProps<"div">) => {
  return (
    <Wrapper {...props}>
      <Image
        src={devocean}
        alt="devocean"
        width={100}
        height={100}
        css={logoStyle}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const logoStyle = css`
  height: 1.8rem;
  width: auto;
`;

export default DevoceanPolicy;
