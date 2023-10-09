import React, { useState, useEffect } from "react";
import { getStaticPathsFromMdFilesDirectory, markdownToHtml } from "../../../../util/markdownHelpers";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { LegalExplainerQuestion } from "@/types/legal";
import { getQuestionFromSlug, getQuestionPageMetaOgTagData } from "@/util/legalExplainer/questions";

type Props = {
    question: LegalExplainerQuestion
}

export default function LegalExplainerQuestionPage({question}: Props) {
    return <Layout metaOgTagData={getQuestionPageMetaOgTagData(question)} >
        <pre>
        {JSON.stringify(question, null, 2)}
    </pre>
    </Layout>
}

export async function getStaticPaths() {
    const basePath = "content/knowing_legal_machines/legal_explainer/questions";
    const paths = await getStaticPathsFromMdFilesDirectory(basePath);
    return { paths, fallback: false };
  }
  
  export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params?.slug + "";
    const question = getQuestionFromSlug(slug);
    return { props: { question } };
  }
  