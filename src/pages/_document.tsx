import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="og:image" content="/og.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon/icon-192x192.png"></link>
        <meta name="msapplication-TileColor" content="#FBFBFB"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
