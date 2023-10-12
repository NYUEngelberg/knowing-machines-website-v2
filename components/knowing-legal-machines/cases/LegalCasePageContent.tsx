import { LegalCase, LegalExplainerQuestion } from "@/types/legal";
import { markdownToHtml, markdownToHtmlSections } from "@/util/markdownHelpers";
import { useEffect } from "react";
import QuestionList from "../QuestionList";
import React from "react";

type Props = {
  legalCase: LegalCase;
  relatedQuestions: LegalExplainerQuestion[];
};

export default function LegalCasePageContent({
  legalCase,
  relatedQuestions,
}: Props) {
  console.log(legalCase);
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
          <div className="flex flex-row items-center gap-[10px] border-black border-x-[1px]">
            <img
              className="max-h-[170px] max-w-full sm:max-w-[200px] border-black border-r-[1px]"
              src={legalCase.coverImg || "/img/about/team/Joler.png"}
              alt={legalCase.coverImgAlt || "Vladan headshot"}
            />
            <h3 className="flex-grow uppercase pl-4 font-bold tracking-wides text-xl">
              {legalCase.title}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8 border-[1px] border-black">

          {legalCase.citations.map((c) => (
            <React.Fragment key={c.citation}>
              <div>
                <span className="font-bold">
                  {c.citation}
                </span>
                <br />
                <span className="content-type text-xs uppercase ">
                  COMPLAINT DATE: {c.complaintDate}
                </span>

              </div>
            </React.Fragment>
          ))}
          <div>


          </div>
          <div className="max-w-3xl  markdown-content">
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
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            LAST UPDATED {legalCase.lastModified}
          </span>
        </div>
        <QuestionList questions={relatedQuestions} prefix="related" />
      </div>
    </div>
  );
}
