import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Frame } from "@/components/Layouts";
import { Global } from "@emotion/react";
import reset from "@/styles/reset";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Frame>
        <Global styles={reset} />
        <Component {...pageProps} />
      </Frame>
    </SessionProvider>
  );
}
