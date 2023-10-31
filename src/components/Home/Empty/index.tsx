import { injectAnimation } from "@/styles/animations";
import { COLORS } from "@/styles/colors";
import { flex } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import styled from "@emotion/styled";

const Empty = () => {
  return (
    <Container>
      <Title>아직 받은 그림이 없어요!</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60vh;
  ${flex("column", "center", "center", 0)};
`;

const Title = styled.span`
  ${TYPO.text2};
  color: ${COLORS.grey25};
  position: relative;
  ${injectAnimation("fadeInTopDown", "0.8s", "linear")};
`;

export default Empty;
