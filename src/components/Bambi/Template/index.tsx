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
}

const Template = ({ question, stage, ...props }: Props) => {
  return (
    <Container {...props}>
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
`;

export default Template;
