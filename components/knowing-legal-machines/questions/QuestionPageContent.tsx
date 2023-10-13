import { LegalCase, LegalExplainerQuestion } from "@/types/legal";
import ShortAnswerSection from "./ShortAnswerSection";
import ConfidenceLevelSection from "./ConfidenceLevelSection";
import RelatedCasesSection from "./RelatedCasesSection";
import LongAnswerSection from "./LongAnswerSection";
import FootnotesSection from "./FootnotesSection";
import LegalCasesList from "../LegalCasesList";

type Props = {
  question: LegalExplainerQuestion;
  relatedCases: LegalCase[];
};

export default function QuestionPageContent({ question, relatedCases }: Props) {
  return (
    <div className="mt-12 pb-6 px-6">
      <div className="relative border-black border-t-[1px] relative max-w-3xl mt-12 mb-[20px]">
        <div className="absolute top-[-25px] left-0">
          <span className="content-type text-xs text-white uppercase bg-black py-1 self-start">
            <a
              className="inline-block pl-2 p-1 hover:bg-[#1400FF] hover:text-white no-underline"
              href="/knowing-legal-machines/legal-explainer"
            >
              ← LEGAL EXPLAINER |
            </a>
            <span className="inline-block pr-2 p-1 pl-0">{"QUESTIONS"}</span>
          </span>
        </div>
        <div>
          <div className="flex flex-col items-left gap-[20px] mt-[20px]">
            <h3 className="flex-grow font-bold text-xl">{question.title}</h3>
          </div>
        </div>
      </div>
      <ShortAnswerSection question={question} />
      <ConfidenceLevelSection question={question} />
      {relatedCases.length > 0 && (
        <RelatedCasesSection legalCases={relatedCases} />
      )}
      <LongAnswerSection markdownContent={question.longAnswer} />
      <span className="mb-8 inline-block content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
        LAST UPDATED {question.lastModified}
      </span>
      {relatedCases.length > 0 && (
        <LegalCasesList legalCases={relatedCases} prefix="related" />
      )}
      <FootnotesSection markdownContent={question.longAnswer} />
    </div>
  );
}
