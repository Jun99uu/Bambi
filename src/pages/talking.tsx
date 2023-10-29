import { useHeader } from "@/hooks";
import { useEffect } from "react";

const Talking = () => {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader("밤비 상담소");
  }, []);

  return <></>;
};

export default Talking;
