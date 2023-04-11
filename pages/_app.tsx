import "@/styles/globals.css";
import "@/styles/fonts.css";
import "@/styles/markdown-content.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5D2YJXSXPP"
      ></Script>
      <Script strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){
          dataLayer.push(arguments);
        }
        gtag('js', new Date()); gtag('config', 'G-5D2YJXSXPP');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
