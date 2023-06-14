import "@/styles/globals.css";
import "@/styles/fonts.css";
import "@/styles/markdown-content.css";
import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="knowingmachines.org">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
