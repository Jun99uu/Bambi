import {
  ToastTheme,
  toastState,
  toastTransitionState,
} from "@/atoms/toastState";
import { useAtom } from "jotai";
import { useEffect } from "react";

const useToast = () => {
  const [toast, setToast] = useAtom(toastState);
  const [isTransition, setIsTransition] = useAtom(toastTransitionState);
  let timeoutId: NodeJS.Timeout | null = null;

  const showToast = (theme: ToastTheme, content: string, delay = 3000) => {
    if (toast.isOpen) return;
    setToast({ isOpen: true, theme, content });
    setTimeout(() => {
      closeToast();
    }, delay);
  };

  const handleUnmount = () => {
    setToast((prev) => {
      return {
        ...prev,
        isOpen: false,
      };
    });
  };

  const closeToast = (delay = 1000) => {
    if (isTransition) return;

    setIsTransition(true);
    timeoutId = setTimeout(() => {
      setIsTransition(false);
      handleUnmount();
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return {
    showToast,
    closeToast,
    isMount: toast.isOpen,
    theme: toast.theme,
    content: toast.content,
    isTransition,
  };
};

export default useToast;
