import ImageApi from "@/apis/image";
import { getCategory, getSentence } from "@/utils/utilizeQuestions";
import { useState, useEffect } from "react";
import { useAuth } from ".";

export const MAX_STAGE = 6;

export type StartType =
  | "disabled"
  | "abled"
  | "loading"
  | "started"
  | "finished";

const useStage = (delay = 1000) => {
  const imageApi = new ImageApi();
  const { session } = useAuth();
  const [starting, setStarting] = useState<StartType>("disabled");
  const [isFinish, setIsFinish] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState({ img: "", desc: "" });
  const [stage, setStage] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
  let timeoutId: NodeJS.Timeout | null = null;

  const postImage = async () => {
    setIsLoading(true);
    try {
      const category = getCategory(selected);
      const prompt = getSentence(
        category,
        session?.user.job!,
        session?.user.taste!
      );
      const data = await imageApi.postImage(prompt);
      setResult({ img: data.images[0].image, desc: category });
      await imageApi.updateImage(data.images[0].image, category);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const handleStart = () => {
    setIsTransition(true);
    timeoutId = setTimeout(() => {
      setIsTransition(false);
      setStarting("started");
    }, delay);
  };

  const handleFinish = async () => {
    setIsFinish(true);
    timeoutId = setTimeout(() => {
      setStarting("finished");
    }, delay);
    await postImage();
  };

  const handleNextStage = (choice?: string) => {
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
      setSelected((prev) => [...prev, choice || ""]);
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
    isLoading,
    result,
  };
};

export default useStage;
