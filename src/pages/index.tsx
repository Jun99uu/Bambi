import { useAuth, useImage } from "@/hooks";
import { PageContainer, pageStyleTopBottom } from "@/styles/tokens";
import { getQuote } from "@/utils/getQuote";
import dynamic from "next/dynamic";

const Title = dynamic(() => import("@/components/Layouts/Title"), {
  ssr: false,
});

const Home = () => {
  const { session } = useAuth();

  return (
    <PageContainer css={pageStyleTopBottom}>
      {typeof window !== "undefined" && (
        <Title
          title={`안녕 ${session?.user.nickname}!`}
          subtitle={getQuote()}
          animated
        />
      )}
    </PageContainer>
  );
};

export default Home;
