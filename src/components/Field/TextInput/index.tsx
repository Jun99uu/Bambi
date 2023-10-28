import { COLORS } from "@/styles/colors";
import { flex, transition } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
  max: number;
  value: string;
  containerStyle?: SerializedStyles;
}

const TextInput = ({ max, value, containerStyle, ...props }: Props) => {
  return (
    <InputContainer css={containerStyle}>
      <InputWrapper maxLength={max} value={value} {...props} />
      <InputCaption css={value.length >= max && captionStyles.warning}>
        {value.length} / {max}
      </InputCaption>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  position: relative;
  ${flex("column", "center", "end", 0.5)};
`;

const InputWrapper = styled.input`
  width: 100%;
  height: 45px;
  padding: 0rem 1.8rem;
  ${flex("row", "start", "center", 0)};
  border-radius: 50rem;
  border: 1px solid ${COLORS.grey25};
  ${TYPO.text2};
  color: ${COLORS.primary};
  background: none;
  outline: none;

  &::placeholder {
    color: ${COLORS.grey25};
  }
`;

const InputCaption = styled.span`
  ${TYPO.text3};
  color: ${COLORS.grey25};
  text-align: end;
  ${transition("0.5s")};
`;

const captionStyles = {
  warning: css`
    color: ${COLORS.tomato};
  `,
};

export default TextInput;
