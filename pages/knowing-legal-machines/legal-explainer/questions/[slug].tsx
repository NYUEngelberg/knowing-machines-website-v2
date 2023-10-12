import React, { useState, useEffect } from "react";
import {
  getStaticPathsFromMdFilesDirectory,
  markdownToHtml,
} from "../../../../util/markdownHelpers";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { LegalCase, LegalExplainerQuestion } from "@/types/legal";
import {
  getLegalExplainerQuestions,
  getQuestionFromSlug,
  getQuestionPageMetaOgTagData,
} from "@/util/legalExplainer/questions";
import { getLegalCases } from "@/util/legalExplainer/cases";
import QuestionList from "@/components/knowing-legal-machines/QuestionList";
import LegalCasesList from "@/components/knowing-legal-machines/LegalCasesList";
import QuestionPageContent from "@/components/knowing-legal-machines/questions/QuestionPageContent";

type Props = {
  question: LegalExplainerQuestion;
  otherQuestions: LegalExplainerQuestion[];
  relatedLegalCases: LegalCase[];
};

export default function LegalExplainerQuestionPage({
  question,
  otherQuestions,
  relatedLegalCases,
}: Props) {
  return (
    <Layout metaOgTagData={getQuestionPageMetaOgTagData(question)}>
      <div className="py-12 mx-auto max-w-3xl">
        <QuestionPageContent
          question={question}
          relatedCases={relatedLegalCases}
        />
        <QuestionList questions={otherQuestions}  prefix="other" />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const basePath = "content/knowing_legal_machines/legal_explainer/questions";
  const paths = await getStaticPathsFromMdFilesDirectory(basePath);
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug + "";
  const question = getQuestionFromSlug(slug);
  const otherQuestions = getLegalExplainerQuestions().filter(
    (q) => q.slug !== slug
  );
  const relatedLegalCases = getLegalCases().filter((r) => {
    // console.log(
    //     r.slug,
    //     question?.relatedCases[0],
    //     question?.relatedCases.indexOf(r.slug),
    //     question?.relatedCases.indexOf(r.slug) !== -1);
    return question?.relatedCases.indexOf(r.slug) !== -1;
  });
  //console.log(relatedLegalCases);
  return { props: { question, otherQuestions, relatedLegalCases } };
};
