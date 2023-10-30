import React, { useState, useEffect } from "react";
import {
  getStaticSlugPathsFromMdFilesDirectory,
  markdownToHtml,
} from "../../../../util/markdownHelpers";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { LegalCase, LegalExplainerQuestion } from "@/types/legal";
import {
  getLegalCaseFromSlug,
  getLegalCasePageMetaOgTagData,
  getLegalCases,
} from "@/util/legalExplainer/cases";
import { getLegalExplainerQuestions } from "@/util/legalExplainer/questions";
import LegalCasePageContent from "@/components/knowing-legal-machines/cases/LegalCasePageContent";
import LegalCasesList from "@/components/knowing-legal-machines/LegalCasesList";

type Props = {
  legalCase: LegalCase;
  otherCases: LegalCase[];
  relatedQuestions: LegalExplainerQuestion[];
};

export default function LegalExplainerCasePage({ legalCase, otherCases, relatedQuestions }: Props) {
  
  return (
    <Layout metaOgTagData={getLegalCasePageMetaOgTagData(legalCase)}>
      <div className="py-12 mx-auto max-w-3xl">
        <LegalCasePageContent
          legalCase={legalCase}
          relatedQuestions={relatedQuestions}
        />
        <LegalCasesList legalCases={otherCases} prefix="other" />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const basePath = "content/knowing_legal_machines/legal_explainer/cases";
  const paths = await getStaticSlugPathsFromMdFilesDirectory(basePath);
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug + "";
  const legalCase = getLegalCaseFromSlug(slug);
  const otherCases = getLegalCases().filter((c) => c.slug !== slug);
  const relatedQuestions = getLegalExplainerQuestions().filter(
    (r) => legalCase?.relatedQuestions.indexOf(r.slug) !== -1
  );
  return { props: { legalCase, otherCases, relatedQuestions } };
};
