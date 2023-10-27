import { COLORS } from "@/styles/colors";
import { flex, transform } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  faCalendarCheck,
  faCat,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  /**
   * 슬래시를 포함한 현재 라우팅 경로
   */
  curRoute: string;
  /**
   * 라우팅 함수
   */
  handleRoute: (url: string) => void;
}

const Navigator = ({ curRoute, handleRoute }: Props) => {
  const items = [
    {
      icon: <FontAwesomeIcon icon={faCalendarCheck} />,
      title: "기록",
      url: "/",
    },
    {
      icon: <FontAwesomeIcon icon={faCat} />,
      title: "밤비",
      url: "/bambi",
    },
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "프로필",
      url: "/profile",
    },
  ];
  return (
    <NavigatorWrapper>
      {items.map((item) => (
        <NavigatorItem
          checked={item.url === curRoute}
          onClick={() => handleRoute(item.url)}
          key={item.title}
        >
          <span>{item.icon}</span>
          <span>{item.title}</span>
        </NavigatorItem>
      ))}
    </NavigatorWrapper>
  );
};

const NavigatorWrapper = styled.div`
  width: 100%;
  min-width: 25rem;
  height: 7rem;
  ${flex("row", "center", "center", 0)};

  position: fixed;
  bottom: 0px;
  left: 50%;

  ${transform("translate(-50%, 0)")}

  border-top: 0.5px solid rgba(10, 10, 10, 0.1);
`;

const itemStyles = {
  checked: css`
    color: ${COLORS.primary};
  `,
  non: css`
    color: #0a0a0ab0;
    transition: all 0.2s ease;

    &:hover {
      color: ${COLORS.grey0};
    }
  `,
};

const NavigatorItem = styled.div<{ checked: boolean }>`
  flex: 1;
  ${flex("column", "center", "center", 0.4)};
  cursor: pointer;

  span:nth-child(1) {
    font-size: 1.6rem;
  }

  span:nth-child(2) {
    ${TYPO.label};
  }

  ${(props) => (props.checked ? itemStyles.checked : itemStyles.non)}
`;

export default Navigator;
