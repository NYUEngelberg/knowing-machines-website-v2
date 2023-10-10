import { LegalCase, LegalExplainerQuestion } from "@/types/legal";
import { markdownToHtml, markdownToHtmlSections } from "@/util/markdownHelpers";
import { useEffect } from "react";
import QuestionList from "../QuestionList";

type Props = {
  legalCase: LegalCase;
  relatedQuestions: LegalExplainerQuestion[];
};

export default function LegalCasePageContent({
  legalCase,
  relatedQuestions,
}: Props) {
  const sections = markdownToHtmlSections(legalCase.content);
  return (
    <div className="my-12">
      <div className="relative border-black border-t-[1px] relative max-w-3xl mb-12">
        <div className="absolute top-[-25px] left-0">
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            LEGAL EXPLAINER CASES
          </span>
        </div>
        <div>
          <div className="flex flex-row items-center gap-[10px] mt-[20px]">
            <h3 className="flex-grow uppercase font-bold tracking-wides text-xl">
              {legalCase.title}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 border-[1px] border-black">
          <div>
            <span className="uppercase font-bold">
              LAST UPDATED {legalCase.lastModified}
            </span>
          </div>
          <div>
            <span className="uppercase font-bold">
              COMPLAINT DATE{legalCase.citationComplaintDates + ""}
            </span>
          </div>
          <div className="max-w-3xl markdown-content">
            {sections.length > 0 &&
              sections.map((section, idx) => (
                <div key={idx}>
                  <div
                    key={idx}
                    className={`markdown-content ${section.className}`}
                    dangerouslySetInnerHTML={{
                      __html: section.content || "",
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
        <QuestionList questions={relatedQuestions} />
      </div>
    </div>
  );
}
