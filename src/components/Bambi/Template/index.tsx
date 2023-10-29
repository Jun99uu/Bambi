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
  stage: number;
  isTransition: boolean;
  isFinish: boolean;
  pushAnswer: (choice: string) => void;
}

const Template = ({
  question,
  stage,
  isTransition,
  isFinish,
  pushAnswer,
  ...props
}: Props) => {
  const getAnimation = (isTransition: boolean, isFinish: boolean) => {
    if (isFinish) return injectAnimation("finishStage", "1.5s", "ease");
    if (isTransition) return injectAnimation("nextStage", "1.5s", "ease");
    if (!isTransition) return injectAnimation("appearStage", "1.5s", "ease");
  };
  return (
    <Container css={getAnimation(isTransition, isFinish)} {...props}>
      <TitleContainer>
        <Title
          title={`Q${stage + 1}`}
          subtitles={[question.question]}
          css={titleStyle}
        />
      </TitleContainer>
      <AnswerBox
        answers={question.answers}
        isTransition
        handleSelect={pushAnswer}
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
`;

export default Template;
