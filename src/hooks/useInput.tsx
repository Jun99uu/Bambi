import { ChangeEvent, useState } from "react";
import { set } from "lodash";

type UseInputReturnType<T> = {
  values: T;
  handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeValue: (key: string, value: string) => void;
  setValue: <K extends keyof T>(path: K, value: T[K]) => void;
};

const useInput = <T extends object>(
  initialValues: T
): UseInputReturnType<T> => {
  const [values, setValues] = useState<T>(initialValues);

  /**
   * input에 넣어 사용하기
   */
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    const updatedValues = set({ ...values }, name, value);
    setValues(updatedValues as T);
  };

  /**
   * 직접 값 바꾸기
   */
  const handleChangeValue = (key: string, value: string): void => {
    const updatedValues = set({ ...values }, key, value);
    setValues(updatedValues as T);
  };

  const setValue = <K extends keyof T>(path: K, value: T[K]): void => {
    const updatedValues = set({ ...values }, path as string, value);
    setValues(updatedValues as T);
  };

  return {
    values,
    handleChangeInput,
    handleChangeValue,
    setValue,
  };
};

export default useInput;
