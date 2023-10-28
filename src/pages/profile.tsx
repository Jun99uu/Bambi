import { LineButton, ProfileBox } from "@/components/Profile";
import { COLORS } from "@/styles/colors";
import { PageContainer, pageStyle } from "@/styles/tokens";
import styled from "@emotion/styled";
import { signOut } from "next-auth/react";

const Profile = () => {
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
        signOut();
      },
    },
    {
      title: "회원 탈퇴",
      onClick: () => {},
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
