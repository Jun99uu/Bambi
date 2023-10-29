import { Popup } from "@/components/Layouts";
import { LineButton, ProfileBox } from "@/components/Profile";
import { useAuth, useTransition } from "@/hooks";
import { COLORS } from "@/styles/colors";
import { PageContainer, pageStyle } from "@/styles/tokens";
import styled from "@emotion/styled";
import { signOut } from "next-auth/react";
import { useState } from "react";

interface ModalConfig {
  title: string;
  buttonContents: string[];
  buttonHandler: () => void;
}

const Profile = () => {
  const { removeAccount } = useAuth();
  const { isMount, handleOpen, handleClose, isTransition } = useTransition(500);
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    title: "",
    buttonContents: ["", ""],
    buttonHandler: () => {},
  });

  const policies = [
    {
      title: "이용약관",
      onClick: () => {},
    },
    {
      title: "개인정보 처리방침",
      onClick: () => {},
    },
    {
      title: "이용 문의",
      onClick: () => {},
    },
  ];

  const auths = [
    {
      title: "로그아웃",
      onClick: () => {
        setModalConfig({
          title: "정말 로그아웃하시겠습니까?",
          buttonContents: ["취소", "확인"],
          buttonHandler: () => signOut(),
        });
        handleOpen();
      },
    },
    {
      title: "회원 탈퇴",
      onClick: () => {
        setModalConfig({
          title:
            "탈퇴하면 계정을 다시 복구할 수 없습니다.\n정말 탈퇴하시겠습니까?",
          buttonContents: ["취소", "확인"],
          buttonHandler: () => {
            removeAccount();
            signOut();
          },
        });
        handleOpen();
      },
    },
  ];

  return (
    <PageContainer css={pageStyle}>
      <ProfileBox />
      <Line />
      {policies.map((policy) => (
        <LineButton {...policy} key={policy.title} />
      ))}
      <Line />
      {auths.map((auth) => (
        <LineButton {...auth} key={auth.title} />
      ))}
      {isMount && (
        <Popup
          {...modalConfig}
          isTransition={isTransition}
          handleClose={handleClose}
        />
      )}
    </PageContainer>
  );
};

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLORS.grey6};
  margin: 1rem 0rem;
`;

export default Profile;
