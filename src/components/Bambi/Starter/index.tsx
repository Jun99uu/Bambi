import { ComponentProps } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Title from "../Title";
import { flex } from "@/styles/tokens";
import { injectAnimation } from "@/styles/animations";
import { BasicButton } from "@/components/Buttons";
import { StartType } from "@/hooks/useStage";

interface Props extends ComponentProps<"div"> {
  starting: StartType;
  handleStart: () => void;
  isTransition: boolean;
}

const Starter = ({ starting, handleStart, isTransition, ...props }: Props) => {
  const getTitle = (starting: StartType) => {
    switch (starting) {
      case "abled":
        return "시작하기";
      case "loading":
        return "잠시만 기다려주세요";
      case "disabled":
        return "내일 다시 방문해주세요!";
      default:
        return "";
    }
  };

  const getButtonType = (starting: StartType) => {
    switch (starting) {
      case "abled":
        return "default";
      case "loading":
      case "disabled":
      case "started":
        return "grey";
    }
  };

  return (
    <Container
      css={isTransition && injectAnimation("nextStage", "1.5s", "ease")}
      {...props}
    >
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
      <BasicButton
        title={getTitle(starting)}
        onClick={handleStart}
        disabled={starting === "disabled" || starting === "loading"}
        buttonType={getButtonType(starting)}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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

export default Starter;
