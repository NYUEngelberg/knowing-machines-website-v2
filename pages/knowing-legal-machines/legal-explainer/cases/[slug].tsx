import React, { useState, useEffect } from "react";
import {
  getStaticPathsFromMdFilesDirectory,
  markdownToHtml,
} from "../../../../util/markdownHelpers";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { LegalCase } from "@/types/legal";
import {
  getLegalCaseFromSlug,
  getLegalCasePageMetaOgTagData,
  getLegalCases,
} from "@/util/legalExplainer/cases";
import { getLegalExplainerQuestions } from "@/util/legalExplainer/questions";

type Props = {
  legalCase: LegalCase;
};

export default function LegalExplainerCasePage({ legalCase }: Props) {
  return (
    <Layout metaOgTagData={getLegalCasePageMetaOgTagData(legalCase)}>
      <pre>{JSON.stringify(legalCase, null, 2)}</pre>
    </Layout>
  );
}

export async function getStaticPaths() {
  const basePath = "content/knowing_legal_machines/legal_explainer/cases";
  const paths = await getStaticPathsFromMdFilesDirectory(basePath);
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug + "";
  const legalCase = getLegalCaseFromSlug(slug);
  const otherCases = getLegalCases().filter((c) => c.slug !== slug);
  const relatedQuestions = getLegalExplainerQuestions().filter(
    (r) => legalCase?.relatedQuestions.indexOf(r.slug) !== -1
  );
  return { props: { legalCase } };
};
