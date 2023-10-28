import { BasicButton } from "@/components/Buttons";
import { SignupStages } from "@/components/Signup";
import { useAuth, useHeader, useInput } from "@/hooks";
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
    useInput<AdditionalData>({ nickname: "", job: "", taste: "" });
  const { signupAdditionalInfo } = useAuth();

  const CurStage = SignupStages[stage];

  const handleNext = () => {
    switch (stage) {
      case 0:
        values.nickname !== "" && setStage((prev) => prev + 1);
        break;
      case 1:
        values.job !== "" && setStage((prev) => prev + 1);
        break;
      case 2:
        signupAdditionalInfo(values);
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
