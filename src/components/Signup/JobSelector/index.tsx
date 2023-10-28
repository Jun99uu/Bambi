import { StageProps } from "Auth";
import { Caption, Container, captionStyles } from "../common";
import { Title } from "@/components/Layouts";
import Carousel from "@/components/Carousel";
import { JOBS } from "@/assets/svg/data/jobs";
import { EmblaOptionsType } from "embla-carousel-react";
import { flex, transform } from "@/styles/tokens";
import { mq } from "@/styles/breakpoints";
import styled from "@emotion/styled";
import { useState } from "react";
import { injectAnimation } from "@/styles/animations";
import { searchIdx } from "@/utils/searchIdx";

const JobSelector = ({ values, handleChangeValue }: StageProps) => {
  const config = {
    title: "요즘 어떤 일을 하고 있나요?",
    subtitle: "당신을 조금 더 이해하고 싶어요.",
    animated: true,
  };
  const carouselOptions: EmblaOptionsType = {
    align: "center",
    containScroll: false,
    loop: true,
  };

  const [focused, setFocused] = useState(searchIdx(values.job));

  const setFocusIdx = (idx: number) => {
    setFocused(idx);
    handleChangeValue("job", JOBS[idx].keyword);
  };

  return (
    <Container>
      <Title {...config} />
      <SlideWrapper>
        <Carousel
          slides={JOBS}
          options={carouselOptions}
          focused={focused}
          setFocused={setFocusIdx}
        />
        <Caption>
          <Caption css={captionStyles.highlight}>{JOBS[focused].title}</Caption>
          {` 이시군요!`}
        </Caption>
      </SlideWrapper>
    </Container>
  );
};

const SlideWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 25%;
  left: 50%;
  ${transform("translate(-50%, 0%)")};
  ${flex("column", "start", "center", 2)};
  ${injectAnimation("fadeInTopDownRelative", "0.8s")};

  @media (min-height: 700px) {
    top: 23%;
  }

  @media (min-height: 750px) {
    top: 20%;
  }

  ${mq[4]} {
    top: 25%;
  }
`;

export default JobSelector;
