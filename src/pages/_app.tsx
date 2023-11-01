import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Frame, ToastProvider } from "@/components/Layouts";
import { Global } from "@emotion/react";
import reset from "@/styles/reset";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "@/utils/gtag";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider />
        <Frame>
          <Global styles={reset} />
          <Component {...pageProps} />
        </Frame>
      </QueryClientProvider>
    </SessionProvider>
  );
}
