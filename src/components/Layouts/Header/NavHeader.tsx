import { mq } from '@/styles/breakpoints';
import { COLORS } from '@/styles/colors';
import { flex, transform } from '@/styles/tokens';
import { TYPO } from '@/styles/typo';
import styled from '@emotion/styled';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {
  title: string;
  onBack?: () => void;
}

const NavHeader = ({ title, onBack, ...props }: Props) => {
  return (
    <HeaderWrapper {...props}>
      <HeaderInner>
        <Chevron onClick={onBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Chevron>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderInner>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  min-width: 32rem;
  height: 6rem;
  position: fixed;
  top: 0px;
  left: 50%;
  ${transform('translate(-50%, 0%)')};

  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);

  ${mq[4]} {
    height: 5rem;
  }
`;

const HeaderInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  ${flex('row', 'center', 'center', 0)};
`;

const HeaderTitle = styled.span`
  ${TYPO.title2.Md};
  color: ${COLORS.grey0};
  cursor: default;
`;

const Chevron = styled.span`
  height: 100%;
  aspect-ratio: 1;
  ${flex('row', 'center', 'center', 0)};

  ${TYPO.title2.Md};
  color: ${COLORS.grey0};
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translate(0, -50%);
  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    left: 1.7rem;
  }

  &:active {
    left: 1.4rem;
  }
`;

export default NavHeader;
