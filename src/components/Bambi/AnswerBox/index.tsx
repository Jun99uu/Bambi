import { COLORS } from "@/styles/colors";
import { flex } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import styled from "@emotion/styled";
import { AnswerType } from "Images";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  isTransition: boolean;
  handleSelect: (category: string) => void;
  answers: AnswerType[];
}

const AnswerBox = ({
  isTransition,
  handleSelect,
  answers,
  ...props
}: Props) => {
  return (
    <AnswerContainer {...props}>
      {answers.map((answer) => (
        <AnswerButton key={answer.text}>{answer.text}</AnswerButton>
      ))}
    </AnswerContainer>
  );
};

const AnswerContainer = styled.div`
  width: 100%;
  ${flex("column", "center", "center", 1)};
`;

const AnswerButton = styled.button`
  width: 100%;
  height: 5rem;
  border: 2px solid ${COLORS.grey25};
  border-radius: 1.5rem;
  cursor: pointer;
  background: none;
  ${TYPO.text2};
`;

export default AnswerBox;
