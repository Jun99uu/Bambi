import { QuestionType } from "Images";
import { ComponentProps } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Title from "../Title";
import { AnswerBox } from "..";
import { flex } from "@/styles/tokens";
import { injectAnimation } from "@/styles/animations";

interface Props extends ComponentProps<"div"> {
  question: QuestionType;
}

const Template = ({ question, ...props }: Props) => {
  return (
    <Container {...props}>
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
        answers={question.answers}
        isTransition
        handleSelect={(category: string) => {}}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${flex("column", "end", "center", 10)};
`;

const TitleContainer = styled.div`
  width: 100%;
  flex: 1;
  ${flex("column", "center", "center", 0)};
`;

const titleStyle = css`
  width: 100%;
  position: relative;
  ${injectAnimation("fadeInTopDown", "0.5s")};
`;

export default Template;
