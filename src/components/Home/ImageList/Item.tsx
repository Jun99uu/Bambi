import { Skeleton } from "@/components/Layouts";
import { injectAnimation } from "@/styles/animations";
import { COLORS } from "@/styles/colors";
import { flex } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ImageType } from "Images";
import Image from "next/image";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  item: ImageType;
  isLoading: boolean;
}

const Item = ({ item, isLoading, ...props }: Props) => {
  return (
    <ItemWrapper {...props}>
      {isLoading ? (
        <>
          <Skeleton css={itemStyles.main} />
          <Skeleton css={itemStyles.sub} />
        </>
      ) : (
        <>
          <Image
            src={item.url}
            alt={item.url}
            width={100}
            height={100}
            css={itemStyles.main}
          />
          <span css={itemStyles.desc}>{item.description}</span>
        </>
      )}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  width: 100%;
  ${flex("column", "center", "start", 1)};
  position: relative;
  ${injectAnimation("fadeInTopDown", "0.8s", "linear")};
`;

const itemStyles = {
  main: css`
    width: 100%;
    height: 27rem;
    border-radius: 1rem;
  `,
  sub: css`
    width: 100%;
    height: 3rem;
    border-radius: 0.6rem;
  `,
  desc: css`
    ${TYPO.text2};
    color: ${COLORS.grey25};
    text-align: start;
  `,
};

export default Item;
