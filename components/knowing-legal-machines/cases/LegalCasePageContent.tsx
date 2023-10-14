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
  const sections = markdownToHtmlSections(legalCase.content);
  return (
    <div className="my-20 ">
      <div className="relative border-black border-t-[1px] relative max-w-3xl mb-12">
        <div className="absolute top-[-25px] left-0">
          <span className="content-type text-xs text-white uppercase bg-black py-1 self-start">
            <a
              className="inline-block pl-2 p-1 hover:bg-[#1400FF] hover:text-white no-underline"
              href="/knowing-legal-machines/legal-explainer"
            >
              ← LEGAL EXPLAINER |
            </a>
            <span className="inline-block pr-2 p-1 pl-0">{"CASES"}</span>
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
        <div className="flex flex-col gap-4 px-8 pt-8 border-[1px] border-black">
          {legalCase.citations.map((c) => (
            <React.Fragment key={c.citation}>
              <div>
                <a href={c.link} className="font-bold">{c.citation}</a>
                <br />
                <span className="content-type text-xs uppercase ">
                  {legalCase.caseDateLabel}: {c.caseDate}
                </span>
              </div>
            </React.Fragment>
          ))}
          <div></div>
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
          <span className="mb-2 inline-block content-type text-xs font-bold uppercase self-start">
            LAST UPDATED {legalCase.lastModified}
          </span>
          {relatedQuestions.length > 0 && (
            <QuestionList questions={relatedQuestions} prefix="related" />
          )}
          <br />
        </div>
      </div>
    </div>
  );
}
