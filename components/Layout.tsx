import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "react-scroll-to-top";
import { MetaOgTagData } from "@/types/meta";

type Props = {
  title?: string;
  children: ReactNode | ReactNode[];
  id?: string;
  navbarDefaultCollapsed?: boolean;
  metaOgTagData: MetaOgTagData
};

export default function Layout({
  title,
  children,
  id,
  navbarDefaultCollapsed = false,
  metaOgTagData
}: Props) {
  return (
    <>
      <Head>
        <title>{title || metaOgTagData?.title}</title>
        <meta name="description" content={metaOgTagData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content={metaOgTagData.title}
        />
        <meta
          property="og:description"
          content={metaOgTagData.description}
        />
        <meta
          property="og:image"
          content={metaOgTagData.imageUrl}
        />
        <meta
          property="og:image:alt"
          content={metaOgTagData.imageAlt}
        />
        <meta
          property="og:url"
          content={metaOgTagData.url}
        />

        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={metaOgTagData.title}
        />
        <meta
          property="twitter:description"
          content={metaOgTagData.description}
        />
        <meta
          property="twitter:image"
          content={metaOgTagData.twitterImageUrl || metaOgTagData.imageUrl}
        />
        <meta
          property="twitter:image:alt"
          content={metaOgTagData.imageAlt}
        />
        <meta
          property="twitter:url"
          content={metaOgTagData.url}
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
      </Head>
      <Navbar defaultCollapsed={navbarDefaultCollapsed} />
      <div id={id} className="pt-12 bg-white text-black font-['IBM_Plex_Mono']">
        {children}
      </div>
      <ScrollToTop smooth color="#1400FF" className="" />

      {/* <Footer /> */}
    </>
  );
}
