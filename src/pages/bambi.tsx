import {
  PageContainer,
  flex,
  pageStyleTopBottom,
  transform,
} from "@/styles/tokens";
import Image from "next/image";
import bambicat from "@/assets/images/bambicat.png";
import { css } from "@emotion/react";
import { injectAnimation } from "@/styles/animations";
import { BambiTitle } from "@/components/Bambi";
import { BasicButton } from "@/components/Buttons";
import { useTransition } from "@/hooks";
import { Loading } from "@/components/Layouts";
import { useRouter } from "next/router";

const Bambi = () => {
  const router = useRouter();
  const { isMount, handleOpen, handleClose, isTransition } = useTransition();

  const startTalk = () => {
    handleOpen();
    setTimeout(() => {
      handleClose();
      router.push("/talking");
    }, 2000);
  };

  return (
    <PageContainer css={[pageStyleTopBottom, additionalPageStyle]}>
      <BambiTitle
        title="오늘 하루는 어땠어?"
        subtitles={[
          "하루가 힘들었는지, 즐거웠는지 궁금해!",
          "나와 잠깐 대화하면, 너의 감정을 그려줄게!",
        ]}
        css={titleStyle}
      />
      <Image
        src={bambicat}
        alt="bambi-cat"
        width={100}
        height={100}
        css={catStyle}
      />
      <BasicButton
        title="밤비와 대화 시작하기"
        onClick={startTalk}
        css={injectAnimation("modalBackgroundAppear", "0.5s")}
      />
      {isMount && <Loading isTransition={isTransition} />}
    </PageContainer>
  );
};

const additionalPageStyle = css`
  ${flex("column", "end", "center", 0)};
  padding-bottom: 10rem;
`;

const catStyle = css`
  width: 18rem;
  height: auto;
  position: absolute;
  bottom: 13rem;
  left: 30%;
  ${transform("translate(-50%, 0%)")};
  ${injectAnimation("modalBackgroundAppear", "0.5s")};
  z-index: 1;
`;

const titleStyle = css`
  width: 100%;
  position: absolute;
  top: 25%;
  left: 50%;
  ${transform("translate(-50%, -50%)")};
  ${injectAnimation("fadeInTopDownRelative", "0.5s")};
`;

export default Bambi;
