import { Covered_By_Your_Grace } from "next/font/google";

const regular = Covered_By_Your_Grace({
  weight: "400",
  display: "fallback",
  subsets: ["latin"],
  style: "normal",
  variable: "--noto-sans_KR-bold",
  fallback: ["system-ui"],
});

export { regular as graceRegular };
