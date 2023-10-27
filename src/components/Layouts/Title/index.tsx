import { injectAnimation } from "@/styles/animations";
import { COLORS } from "@/styles/colors";
import { flex } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  /**
   *  메인 제목
   */
  title: string;
  /**
   * 서브 제목
   */
  subtitle: string;
  /**
   * 애니메이션 적용 여부
   */
  animated: boolean;
}

const Title = ({ title, subtitle, animated, ...props }: Props) => {
  return (
    <TitleWrapper
      css={animated && injectAnimation("fadeInTopDown", "0.8s", "linear")}
      {...props}
    >
      <span css={typo.title}>{title}</span>
      <span css={typo.subtitle}>{subtitle}</span>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  ${flex("column", "start", "start", 1.1)};
  white-space: pre-line;
  word-break: keep-all;
  position: relative;
`;

const typo = {
  title: css`
    ${TYPO.title1};
    color: ${COLORS.grey1};
  `,
  subtitle: css`
    ${TYPO.text1};
    color: ${COLORS.grey1};
  `,
};

export default Title;
