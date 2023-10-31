import { ImageType } from "Images";
import Image from "next/image";
import { ComponentProps } from "react";
import { ItemWrapper, itemStyles } from "./common";
import styled from "@emotion/styled";
import { flex } from "@/styles/tokens";
import { formatDate } from "@/utils/getDate";
import { useTransition } from "@/hooks";
import ImageDetail from "../ImageDetail";

interface Props extends ComponentProps<"div"> {
  item: ImageType;
  isLoading: boolean;
}

const Item = ({ item, isLoading, ...props }: Props) => {
  const { handleOpen, handleClose, isMount, isTransition } = useTransition();
  return (
    <ItemWrapper {...props}>
      <Image
        src={item.url}
        alt={item.url}
        width={100}
        height={100}
        onClick={handleOpen}
        css={itemStyles.main}
      />
      <BottomWrapper>
        <span css={itemStyles.desc}>{item.description}</span>
        <span css={itemStyles.date}>{formatDate(item.created_at)}</span>
      </BottomWrapper>
      {isMount && (
        <ImageDetail
          img={item.url}
          date={formatDate(item.created_at)}
          emotion={item.description}
          isTransition={isTransition}
          handleClose={handleClose}
        />
      )}
    </ItemWrapper>
  );
};

const BottomWrapper = styled.div`
  width: 100%;
  ${flex("row", "between", "end", 0)}
`;

export default Item;
