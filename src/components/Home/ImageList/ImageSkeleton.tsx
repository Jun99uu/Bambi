import { Skeleton } from "@/components/Layouts";
import { ComponentProps } from "react";
import { ItemWrapper, itemStyles } from "./common";

interface Props extends ComponentProps<"div"> {}

const ImageSkeleton = ({ ...props }: Props) => {
  return (
    <ItemWrapper {...props}>
      <Skeleton css={itemStyles.main} />
      <Skeleton css={itemStyles.sub} />
    </ItemWrapper>
  );
};

export default ImageSkeleton;
