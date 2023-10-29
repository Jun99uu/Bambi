import { Starter, Template } from "@/components/Bambi";
import { Loading } from "@/components/Layouts";
import { useHeader, useStage } from "@/hooks";
import { MAX_STAGE } from "@/hooks/useStage";
import { mq } from "@/styles/breakpoints";
import { PageContainer } from "@/styles/tokens";
import { getRandomQuestions } from "@/utils/utilizeQuestions";
import { css } from "@emotion/react";
import { useEffect, useMemo, useState } from "react";

const Talking = () => {
  const { setHeader } = useHeader();
  const { starting, isTransition, stage, handleNextStage, isFinish } =
    useStage(1500);
  const [selected, setSelected] = useState<string[]>([]);

  const myQuestions = useMemo(() => {
    return getRandomQuestions(MAX_STAGE);
  }, []);

  const pushAnswer = (choice: string) => {
    setSelected((prev) => [...prev, choice]);
    handleNextStage();
  };

  useEffect(() => {
    setHeader("밤비 상담소");
  }, []);

  return (
    <PageContainer css={pageStyle}>
      {starting === "started" && (
        <Template
          question={myQuestions[stage]}
          stage={stage}
          pushAnswer={pushAnswer}
          isFinish={isFinish}
          isTransition={isTransition}
        />
      )}
      {starting !== "started" && (
        <Starter
          starting={starting}
          handleStart={handleNextStage}
          isTransition={isTransition}
        />
      )}
      {starting === "loading" && <Loading />}
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
