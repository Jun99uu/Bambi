import { useRouter } from 'next/router';
import { Navigator } from '..';

const FrameNavigator = () => {
  const router = useRouter();

  const handleRoute = (url: string) => {
    router.push(url);
  };

  switch (router.pathname) {
    case '/':
    case '/template':
    case '/mate':
    case '/schedule':
      return <Navigator curRoute={router.pathname} handleRoute={handleRoute} />;
    default:
      return <></>;
  }
};

export default FrameNavigator;
