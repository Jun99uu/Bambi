import ProfileBox from "@/components/Profile/ProfileBox";
import { PageContainer, pageStyle } from "@/styles/tokens";

const Profile = () => {
  return (
    <PageContainer css={pageStyle}>
      <ProfileBox />
    </PageContainer>
  );
};

export default Profile;
