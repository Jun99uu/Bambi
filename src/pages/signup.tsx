import { seos } from "@/assets/seos";
import { JOBS } from "@/assets/svg/data/jobs";
import { PAINTINGS } from "@/assets/svg/data/paintings";
import { BasicButton } from "@/components/Buttons";
import Seo from "@/components/Seo";
import { SignupStages } from "@/components/Signup";
import { useAuth, useHeader, useInput, useToast } from "@/hooks";
import { mq } from "@/styles/breakpoints";
import { PageContainer, flex } from "@/styles/tokens";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { AdditionalData } from "Auth";
import { useEffect, useState } from "react";

const Signup = () => {
  const { setHeader } = useHeader();
  const [stage, setStage] = useState(0);
  const { values, handleChangeValue, handleChangeInput } =
    useInput<AdditionalData>({
      nickname: "",
      job: JOBS[0].keyword,
      taste: PAINTINGS[0].keyword,
    });
  const { signupAdditionalInfo, redirectLoginPage } = useAuth();
  const { showToast } = useToast();

  const CurStage = SignupStages[stage];

  const handleNext = async () => {
    switch (stage) {
      case 0:
        values.nickname !== "" && setStage((prev) => prev + 1);
        break;
      case 1:
        values.job !== "" && setStage((prev) => prev + 1);
        break;
      case 2:
        const res = await signupAdditionalInfo(values);
        if (res) {
          showToast(
            "positive",
            "회원가입이 완료되었습니다.\n다시 로그인해주세요!"
          );
          redirectLoginPage();
        }
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (stage) {
      case 0:
        break;
      case 1:
        setStage((prev) => prev - 1);
        break;
      case 2:
        setStage((prev) => prev - 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setHeader("추가 정보 입력하기");
  }, []);

  return (
    <PageContainer css={pageStyle}>
      <Seo {...seos.signup} />
      <CurStage
        values={values}
        handleChangeInput={handleChangeInput}
        handleChangeValue={handleChangeValue}
      />
      <ButtonsWrapper>
        {stage > 0 && (
          <BasicButton
            buttonType="grey"
            title={buttonsConfig[stage].disabled}
            onClick={handleBack}
          />
        )}
        <BasicButton
          buttonType="default"
          title={buttonsConfig[stage].abled}
          onClick={handleNext}
        />
      </ButtonsWrapper>
    </PageContainer>
  );
};

const buttonsConfig = [
  {
    disabled: "",
    abled: "다 썼어요!",
  },
  {
    disabled: "이전으로 돌아갈래요",
    abled: "골랐어요!",
  },
  {
    disabled: "이전으로 돌아갈래요",
    abled: "다 골랐어요!",
  },
];

const pageStyle = css`
  padding-top: 25%;

  ${mq[4]} {
    padding-top: 20%;
  }
`;

const ButtonsWrapper = styled.div`
  width: 90%;
  ${flex("column", "center", "center", 1)};
  position: absolute;
  bottom: 5%;
`;

export default Signup;
