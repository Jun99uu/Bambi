import { BasicButton } from "@/components/Buttons";
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
  subtitles: string[];
}

const Title = ({ title, subtitles, ...props }: Props) => {
  return (
    <TitleWrapper {...props}>
      <span css={typo.title}>{title}</span>
      <SubtitlesWrapper>
        {subtitles.map((subtitle) => (
          <span css={typo.subtitle}>{subtitle}</span>
        ))}
      </SubtitlesWrapper>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  ${flex("column", "start", "center", 1)};
  white-space: pre-line;
  word-break: keep-all;
  position: relative;
`;

const SubtitlesWrapper = styled.div`
  ${flex("column", "start", "center", 0.5)};
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
