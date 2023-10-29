import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Frame } from "@/components/Layouts";
import { Global } from "@emotion/react";
import reset from "@/styles/reset";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Frame>
          <Global styles={reset} />
          <Component {...pageProps} />
        </Frame>
      </QueryClientProvider>
    </SessionProvider>
  );
}
