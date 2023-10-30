import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps } from "react";

/**
 * Skeleton UI
 */
const Skeleton = ({ ...props }: ComponentProps<"div">) => {
  return <SkeletonBox {...props} />;
};

const shine = keyframes`
    to {
        background-position-x: -200%;
    }
`;

const SkeletonBox = styled.div`
  background: #eee;
  background: linear-gradient(1000deg, #ececec 5%, #f5f5f5 18%, #ececec 53%);
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`;

export default Skeleton;
