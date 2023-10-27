import { headerTitleState } from '@/atoms/headerTitleState';
import { useAtom } from 'jotai';

const useHeader = () => {
  const [headerTitle, setHeaderTitle] = useAtom(headerTitleState);

  const setHeader = (title: string) => {
    setHeaderTitle(title);
  };

  return { headerTitle, setHeader };
};

export default useHeader;
