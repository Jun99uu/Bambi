import { seos } from "@/assets/seos";
import Seo from "@/components/Seo";
import { useAuth, useImage } from "@/hooks";
import { PageContainer, flex, pageStyleTopBottom } from "@/styles/tokens";
import { getQuote } from "@/utils/getQuote";
import { css } from "@emotion/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Title = dynamic(() => import("@/components/Layouts/Title"), {
  ssr: false,
});
const ImageList = dynamic(() => import("@/components/Home/ImageList"), {
  ssr: false,
});

const Home = () => {
  const { session } = useAuth();
  const { getImages, imageList, isLoading } = useImage();

  useEffect(() => {
    getImages();
  }, []);

  return (
    <PageContainer css={[pageStyleTopBottom, homeStyle]}>
      <Seo {...seos.index} />
      {typeof window !== "undefined" && (
        <>
          <Title
            title={`안녕 ${session?.user.nickname}!`}
            subtitle={getQuote()}
            animated
          />
          <ImageList images={imageList} isLoading={isLoading} />
        </>
      )}
    </PageContainer>
  );
};

const homeStyle = css`
  ${flex("column", "start", "start", 3)};
`;

export default Home;
