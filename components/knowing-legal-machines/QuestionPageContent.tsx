import { LegalExplainerQuestion } from "@/types/legal";

type Props = {
  question: LegalExplainerQuestion;
};

export default function QuestionPageContent({ question }: Props) {
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
    </div>
  );
}
