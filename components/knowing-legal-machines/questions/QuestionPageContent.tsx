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
    <div className="my-12">
      <div className="relative border-black border-t-[1px] relative max-w-3xl mb-12">
        <div className="absolute top-[-25px] left-0">
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            LEGAL EXPLAINER QUESTIONS
          </span>
        </div>
        <div>
          <div className="flex flex-col items-left gap-[20px] mt-[20px]">
            <h3 className="flex-grow uppercase font-bold tracking-wides text-xl">
              {question.title}
            </h3>
            <span className="uppercase">LAST UPDATED {question.lastModified}</span>
          </div>
        </div>
      </div>
      <ShortAnswerSection question={question} />
      <ConfidenceLevelSection question={question} />
      <RelatedCasesSection legalCases={relatedCases} />
      <LongAnswerSection markdownContent={question.longAnswer} />
      <LegalCasesList legalCases={relatedCases} />
      <FootnotesSection markdownContent={question.longAnswer} />
    </div>
  );
}
