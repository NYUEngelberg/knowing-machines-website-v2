import React, { useState, useEffect } from "react";
import { getStaticPathsFromMdFilesDirectory, markdownToHtml } from "../../../../util/markdownHelpers";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { LegalCase } from "@/types/legal";
import { getQuestionFromSlug, getQuestionPageMetaOgTagData } from "@/util/legalExplainer/questions";
import { getLegalCaseFromSlug, getLegalCasePageMetaOgTagData } from "@/util/legalExplainer/cases";

type Props = {
    legalCase: LegalCase
}

export default function LegalExplainerCasePage({legalCase}: Props) {
    return <Layout metaOgTagData={getLegalCasePageMetaOgTagData(legalCase)} >
        <pre>
        {JSON.stringify(legalCase, null, 2)}
    </pre>
    </Layout>
}

export async function getStaticPaths() {
    const basePath = "content/knowing_legal_machines/legal_explainer/cases";
    const paths = await getStaticPathsFromMdFilesDirectory(basePath);
    return { paths, fallback: false };
  }
  
  export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params?.slug + "";
    const legalCase = getLegalCaseFromSlug(slug);
    return { props: { legalCase } };
  }
  