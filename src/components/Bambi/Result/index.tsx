import { BasicButton } from "@/components/Buttons";
import { Skeleton } from "@/components/Layouts";
import { useAuth } from "@/hooks";
import { injectAnimation } from "@/styles/animations";
import { mq } from "@/styles/breakpoints";
import { COLORS } from "@/styles/colors";
import { flex } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  img: string;
  desc: string;
  isLoading: boolean;
}

const Result = ({ img, desc, isLoading, ...props }: Props) => {
  const { redirectHomePage } = useAuth();
  return (
    <Container {...props}>
      <Topper>
        {isLoading ? (
          <Skeleton css={imgStyle} />
        ) : (
          <Image src={img} alt="desc" width={100} height={100} css={imgStyle} />
        )}
        <DescContainer>
          {isLoading ? (
            <>
              <Skeleton css={skeletonStyles.title} />
              <Skeleton css={skeletonStyles.subtitle} />
            </>
          ) : (
            <>
              <span css={descStyles.title}>{desc}</span>
              <span
                css={descStyles.content}
              >{`이미지를 꾹 눌러 저장해보세요!\n지금 저장하지 않아도, 기록 탭에서 확인할 수 있어요.`}</span>
            </>
          )}
        </DescContainer>
      </Topper>
      <BasicButton title={"홈 화면으로"} onClick={redirectHomePage} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${flex("column", "end", "center", 0)};
  position: relative;
  opacity: 0;
  ${injectAnimation("appearfinishStage", "1.5s", "ease")};
`;

const Topper = styled.div`
  width: 100%;
  flex: 1;
  ${flex("column", "start", "center", 2)};
`;

const DescContainer = styled.div`
  width: 100%;
  ${flex("column", "end", "center", 1)};
`;

const descStyles = {
  title: css`
    ${TYPO.title3};
    color: ${COLORS.grey25};
    text-align: center;
    white-space: pre-line;
  `,
  content: css`
    ${TYPO.text2};
    color: ${COLORS.blue};
    text-align: center;
    white-space: pre-line;
    line-height: 150%;
  `,
};

const imgStyle = css`
  width: 90%;
  height: 35rem;
  border-radius: 3rem;
  object-fit: cover;
  object-position: center;

  @media (min-height: 700px) {
    height: 40rem;
  }

  @media (min-height: 750px) {
    height: 45rem;
  }

  ${mq[4]} {
    height: 35rem;
  }
`;

const skeletonStyles = {
  title: css`
    width: 50%;
    height: 5rem;
    border-radius: 1rem;
  `,
  subtitle: css`
    width: 80%;
    height: 3rem;
    border-radius: 0.5rem;
  `,
};

export default Result;
