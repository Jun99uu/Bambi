import { JOBS } from "@/assets/svg/data/jobs";
import { PAINTINGS } from "@/assets/svg/data/paintings";
import { useAuth } from "@/hooks";
import { COLORS } from "@/styles/colors";
import { flex } from "@/styles/tokens";
import { TYPO } from "@/styles/typo";
import { searchIdx } from "@/utils/searchIdx";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

const ProfileBox = () => {
  const { session } = useAuth();
  const profileData = {
    image:
      session?.user.photo ||
      "https://i.pinimg.com/564x/69/50/1b/69501b91b9aad7e2e62819ba91ca7ffe.jpg",
    nickname: session?.user.nickname || "Anonymous",
    job: JOBS[searchIdx(session?.user.job!)].title || "무직",
    taste: PAINTINGS[searchIdx(session?.user.taste!)].title || "",
  };

  return (
    <BoxWrapper>
      <Image
        src={profileData.image}
        alt="profile-image"
        width={100}
        height={100}
        css={profileImage}
      />
      <InfoWrapper>
        <span css={textStyles.title}>{profileData.nickname}</span>
        <span
          css={textStyles.subtitle}
        >{`${profileData.taste}을 좋아하는,\n${profileData.job}`}</span>
      </InfoWrapper>
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  width: 100%;
  padding: 2rem 0.2rem;
  ${flex("row", "start", "center", 1.5)};
`;

const InfoWrapper = styled.div`
  flex: 1;
  ${flex("column", "center", "start", 0.5)};
`;

const profileImage = css`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 1rem;
`;

const textStyles = {
  title: css`
    ${TYPO.title2};
    color: ${COLORS.grey2};
  `,
  subtitle: css`
    ${TYPO.text2};
    color: ${COLORS.grey25};
    white-space: pre-line;
  `,
};

export default ProfileBox;
