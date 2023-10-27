import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Frame } from "@/components/Layouts";
import { Global } from "@emotion/react";
import reset from "@/styles/reset";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Frame>
      <Global styles={reset} />
      <Component {...pageProps} />
    </Frame>
  );
}
