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
      <div className="relative border-black border-t-[1px] relative max-w-3xl mt-12 mb-[20px]">
        <div className="absolute top-[-25px] left-0">
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            LEGAL EXPLAINER QUESTIONS
          </span>
        </div>
        <div>
          <div className="flex flex-col items-left gap-[20px] mt-[20px]">
            <h3 className="flex-grow font-bold text-xl">
              {question.title}
            </h3>
          </div>
        </div>
      </div>
      <ShortAnswerSection question={question} />
      <ConfidenceLevelSection question={question} />
      <RelatedCasesSection legalCases={relatedCases} />
      <LongAnswerSection markdownContent={question.longAnswer} />
      <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">LAST UPDATED {question.lastModified}</span>
      <LegalCasesList legalCases={relatedCases} prefix="related"  />
      <FootnotesSection markdownContent={question.longAnswer} />
      
    </div>
  );
}
