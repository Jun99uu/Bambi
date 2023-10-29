import { useState, useEffect } from "react";

/** transition이 true가 되면 닫는 애니메이션 실행 */
const useTransition = (delay = 1000) => {
  const [isMount, setIsMount] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const [isActive, setIsActive] = useState(false);
  let timeoutId: NodeJS.Timeout | null = null;

  const handleOpen = () => {
    setIsMount(true);
    setIsActive(true);
  };

  const handleUnmount = () => {
    setIsMount(false);
  };

  const handleClose = () => {
    if (isTransition) return;

    setIsTransition(true);
    setIsActive(false);
    timeoutId = setTimeout(() => {
      setIsTransition(false);
      handleUnmount();
    }, delay);
  };

  const handleToggle = () => {
    if (isMount) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return {
    isMount,
    isTransition,
    handleClose,
    handleOpen,
    handleToggle,
    isActive,
  };
};

export default useTransition;
