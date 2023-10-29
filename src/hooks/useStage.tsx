import { useState, useEffect } from "react";

export const MAX_STAGE = 6;

export type StartType =
  | "disabled"
  | "abled"
  | "loading"
  | "started"
  | "finished";

const useStage = (delay = 1000) => {
  const [starting, setStarting] = useState<StartType>("disabled");
  const [isFinish, setIsFinish] = useState(false);
  const [stage, setStage] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
  let timeoutId: NodeJS.Timeout | null = null;

  const handleStart = () => {
    setIsTransition(true);
    timeoutId = setTimeout(() => {
      setIsTransition(false);
      setStarting("started");
    }, delay);
  };

  const handleFinish = () => {
    setIsFinish(true);
    timeoutId = setTimeout(() => {
      setStarting("finished");
    }, delay);
  };

  const handleNextStage = () => {
    if (isTransition) return;
    if (stage === MAX_STAGE - 1) {
      handleFinish();
      return;
    }
    if (starting === "abled") {
      handleStart();
      return;
    }

    setIsTransition(true);
    timeoutId = setTimeout(() => {
      setIsTransition(false);
      setStage((prev) => prev + 1);
    }, delay);
  };

  useEffect(() => {
    setStarting("abled"); //TODO 시작 가능인지 검사하기
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return {
    starting,
    isTransition,
    isFinish,
    stage,
    handleNextStage,
  };
};

export default useStage;
