import styled from "@emotion/styled";
import { ImageType } from "Images";
import { ComponentProps } from "react";
import Item from "./Item";

interface Props extends ComponentProps<"div"> {
  images: ImageType[];
  isLoading: boolean;
}

const ImageList = ({ images, isLoading, ...props }: Props) => {
  return (
    <Container {...props}>
      {images.map((img, idx) => (
        <Item item={img} isLoading={isLoading} />
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
