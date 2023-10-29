import { questions } from "@/assets/svg/data/questions";
import { AnswerBox } from "@/components/Bambi";
import Title from "@/components/Bambi/Title";
import { useHeader } from "@/hooks";
import { injectAnimation } from "@/styles/animations";
import { mq } from "@/styles/breakpoints";
import { PageContainer, flex } from "@/styles/tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect } from "react";

const Talking = () => {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader("밤비 상담소");
  }, []);

  return (
    <PageContainer css={pageStyle}>
      <TitleContainer>
        <Title
          title="어서오세요! 밤비 상담소입니다."
          subtitles={[
            "지금부터 6개의 질문을 드릴거예요.",
            "질문에 솔직하게 답변해준다면,",
            "여러분의 감정을 그림으로 그려드려요.",
            "밤비 상담소는 하루에 한 번 이용이 가능합니다!",
          ]}
          css={titleStyle}
        />
      </TitleContainer>
      <AnswerBox
        answers={questions[0].answers}
        isTransition
        handleSelect={(category: string) => {}}
      />
    </PageContainer>
  );
};

const TitleContainer = styled.div`
  width: 100%;
  flex: 1;
  ${flex("column", "center", "center", 0)};
`;

const pageStyle = css`
  width: 100%;
  height: 100%;
  padding: 12rem 2.7rem 8rem 2.7rem;
  ${flex("column", "end", "center", 10)};

  ${mq[4]} {
    padding-top: 9rem 0rem 7rem 0rem;
  }
`;

const titleStyle = css`
  width: 100%;
  position: relative;
  ${injectAnimation("fadeInTopDown", "0.5s")};
`;

export default Talking;
