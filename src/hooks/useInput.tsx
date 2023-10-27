import { ChangeEvent, useState } from 'react';
import { set } from 'lodash';

type UseInputReturnType<T> = {
  values: T;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setValue: <K extends keyof T>(path: K, value: T[K]) => void;
};

const useInput = <T extends object>(
  initialValues: T,
): UseInputReturnType<T> => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    const updatedValues = set({ ...values }, name, value);
    setValues(updatedValues as T);
  };

  const setValue = <K extends keyof T>(path: K, value: T[K]): void => {
    const updatedValues = set({ ...values }, path as string, value);
    setValues(updatedValues as T);
  };

  return {
    values,
    handleChange,
    setValue,
  };
};

export default useInput;
