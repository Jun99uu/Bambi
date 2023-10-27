import { TextInput } from "@/components/Field";
import { Title } from "@/components/Layouts";
import { flex } from "@/styles/tokens";
import styled from "@emotion/styled";
import { StageProps } from "Auth";

const NicknameInput = ({ values, handleChangeInput }: StageProps) => {
  const config = {
    title: "당신의 별명을 알려주세요!",
    subtitle: "조금 더 친근하게 불러드릴게요.",
    animated: true,
  };

  return (
    <Container>
      <Title {...config} />
      <TextInput
        max={6}
        value={values.nickname}
        onChange={handleChangeInput}
        name="nickname"
        placeholder="닉네임을 입력해주세요."
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  ${flex("column", "start", "start", 4)};
`;

export default NicknameInput;
