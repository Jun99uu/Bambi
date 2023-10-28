import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import styled from "@emotion/styled";
import { CarouselContent } from "Auth";
import Image from "next/image";
import { css } from "@emotion/react";
import { ComponentProps, useEffect, useState } from "react";
import { mq } from "@/styles/breakpoints";

interface Props extends ComponentProps<"div"> {
  slides: CarouselContent[];
  options?: EmblaOptionsType;
  focused: number;
  setFocused: (idx: number) => void;
}

const Carousel = ({
  slides,
  options,
  focused,
  setFocused,
  ...props
}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  /**--- function ---*/
  const updateFocusIndex = () => {
    if (emblaApi) {
      const index = emblaApi.selectedScrollSnap();
      setFocused(index);
    }
  };

  /**--- useEffect function ---*/
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", updateFocusIndex);
    }
    return () => {
      if (emblaApi) {
        emblaApi.off("select", updateFocusIndex);
      }
    };
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(focused);
    }
  }, [emblaApi, focused]);

  return (
    <Embla {...props}>
      <Viewport ref={emblaRef}>
        <Container>
          {slides.map((slide) => (
            <Slide key={slide.title}>
              <Image
                className="embla__slide__img"
                src={slide.img}
                alt={slide.keyword}
                width={100}
                height={100}
                css={slideImageStyle}
              />
            </Slide>
          ))}
        </Container>
      </Viewport>
    </Embla>
  );
};

const Embla = styled.div`
  --slide-spacing: 1rem;
  --slide-size: 80%;
  --slide-height: 30vh;
  --slide-radius: 1rem;

  @media (min-height: 750px) {
    --slide-height: 40vh;
  }

  ${mq[4]} {
    --slide-height: 30vh;
  }
`;

const Viewport = styled.div`
  overflow: hidden;
`;

const Container = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);
`;

const Slide = styled.div`
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  position: relative;
`;

const slideImageStyle = css`
  display: block;
  height: var(--slide-height);
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: var(--slide-radius);
`;
export default Carousel;
