import { useRouter } from 'next/router';
import { NavHeader, TitleHeader } from '../Header';
import { useHeader } from '@/hooks';

const FrameHeader = () => {
  const router = useRouter();
  const { headerTitle } = useHeader();

  const handleBack = () => {
    router.back();
  };

  const handleMyPage = () => {
    router.push('/mypage');
  };

  switch (router.pathname) {
    case '/landing':
      return <></>;
    case '/':
    case '/template':
    case '/mate':
    case '/schedule':
      return <TitleHeader mypageHandler={handleMyPage} />;
    default:
      return <NavHeader title={headerTitle} onBack={handleBack} />;
  }
};

export default FrameHeader;
