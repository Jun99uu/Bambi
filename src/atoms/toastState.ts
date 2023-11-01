import { atom } from "jotai";

export type ToastTheme = "negative" | "positive";

interface ToastType {
  isOpen: boolean;
  theme: ToastTheme;
  content: string;
}

export const toastState = atom<ToastType>({
  isOpen: false,
  theme: "positive",
  content: "",
});

export const toastTransitionState = atom<boolean>(false);
