import styled from "@emotion/styled";
import { ImageType } from "Images";
import { ComponentProps } from "react";
import Item from "./Item";
import ImageSkeleton from "./ImageSkeleton";
import { Empty } from "..";

interface Props extends ComponentProps<"div"> {
  images: ImageType[];
  isLoading: boolean;
}

const newArr = new Array(5).fill(1);

const ImageList = ({ images, isLoading, ...props }: Props) => {
  return !isLoading && !!!images.length ? (
    <Empty />
  ) : (
    <Container {...props}>
      {isLoading
        ? newArr.map((_, idx) => <ImageSkeleton key={idx} />)
        : images.map((img, idx) => (
            <Item item={img} isLoading={isLoading} key={img.url} />
          ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export default ImageList;
