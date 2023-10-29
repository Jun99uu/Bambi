import { questions } from "@/assets/svg/data/questions";
import { Template } from "@/components/Bambi";
import { useHeader } from "@/hooks";
import { mq } from "@/styles/breakpoints";
import { PageContainer } from "@/styles/tokens";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

const Talking = () => {
  const { setHeader } = useHeader();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    setHeader("밤비 상담소");
  }, []);

  return (
    <PageContainer css={pageStyle}>
      <Template question={questions[stage]} />
    </PageContainer>
  );
};

const pageStyle = css`
  width: 100%;
  height: 100%;
  padding: 12rem 2.7rem 8rem 2.7rem;

  ${mq[4]} {
    padding-top: 9rem 0rem 7rem 0rem;
  }
`;

export default Talking;
