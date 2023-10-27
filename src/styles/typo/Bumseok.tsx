import localFont from "next/font/local";

const regular = localFont({
  src: "./bumseok.ttf",
  weight: "400",
  display: "fallback",
  style: "normal",
  variable: "--bumseok-regular",
  fallback: ["system-ui"],
});

export { regular as bumseokRegular };
