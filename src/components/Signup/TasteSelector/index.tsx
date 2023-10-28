import { StageProps } from "Auth";
import { Caption, Container, captionStyles } from "../common";
import { Title } from "@/components/Layouts";
import Carousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { flex, transform } from "@/styles/tokens";
import { mq } from "@/styles/breakpoints";
import styled from "@emotion/styled";
import { useState } from "react";
import { injectAnimation } from "@/styles/animations";
import { searchIdx } from "@/utils/searchIdx";
import { PAINTINGS } from "@/assets/svg/data/paintings";

const JobSelector = ({ values, handleChangeValue }: StageProps) => {
  const config = {
    title: "가장 마음에 드는 그림을 골라주세요.",
    subtitle: "당신이 좋아하는 화풍을 알고 싶어요!",
    animated: true,
  };
  const carouselOptions: EmblaOptionsType = {
    align: "center",
    containScroll: false,
    loop: true,
  };

  const [focused, setFocused] = useState(searchIdx(values.taste));

  const setFocusIdx = (idx: number) => {
    setFocused(idx);
    handleChangeValue("taste", PAINTINGS[idx].keyword);
  };

  return (
    <Container>
      <Title {...config} />
      <SlideWrapper>
        <Carousel
          slides={PAINTINGS}
          options={carouselOptions}
          focused={focused}
          setFocused={setFocusIdx}
        />
        <Caption>
          <Caption css={captionStyles.highlight}>
            {PAINTINGS[focused].title}
          </Caption>
          {`의 그림을 좋아시는군요!`}
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
