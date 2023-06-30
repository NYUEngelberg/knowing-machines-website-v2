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
  metaOgTagData?: MetaOgTagData
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
        <meta name="description" content="Knowing Machines is a research project tracing the histories, practices, and politics of how machine learning systems are trained to interpret the world." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="KNOWING MACHINES / A CRITICAL FIELD GUIDE FOR WORKING WITH MACHINE LEARNING DATASETS"
        />
        <meta
          property="og:description"
          content="Maybe you’re an engineer creating a new machine vision system to track birds. You might be a journalist using social media data to research Costa Rican households. You could be a researcher who stumbled upon your university’s archive of handwritten census cards from 1939. Or a designer creating a chatbot that relies on large language models like GPT-3. Perhaps you’re an artist experimenting with visual style combinations using DALLE-2. Or maybe you’re an activist with an urgent story that needs telling, and you’re searching for the right dataset to tell it."
        />
        <meta
          property="og:image"
          content="https://knowingmachines.org/img/field_guide_black_1.png"
        />
        <meta
          property="og:image:alt"
          content="'A CRITICAL FIELD GUIDE FOR WORKING WITH MACHINE LEARNING DATASETS - Cover"
        />
        <meta
          property="og:url"
          content="https://knowingmachines.org/critical-field-guide"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content="KNOWING MACHINES / A CRITICAL FIELD GUIDE FOR WORKING WITH MACHINE LEARNING DATASETS"
        />
        <meta
          property="twitter:description"
          content="Maybe you’re an engineer creating a new machine vision system to track birds. You might be a journalist using social media data to research Costa Rican households. You could be a researcher who stumbled upon your university’s archive of handwritten census cards from 1939. Or a designer creating a chatbot that relies on large language models like GPT-3. Perhaps you’re an artist experimenting with visual style combinations using DALLE-2. Or maybe you’re an activist with an urgent story that needs telling, and you’re searching for the right dataset to tell it."
        />
        <meta
          property="twitter:image"
          content="https://knowingmachines.org/img/field_guide_black_1.png"
        />
        <meta
          property="twitter:image:alt"
          content="'A CRITICAL FIELD GUIDE FOR WORKING WITH MACHINE LEARNING DATASETS - Cover"
        />
        <meta
          property="twitter:url"
          content="https://knowingmachines.org/critical-field-guide"
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
