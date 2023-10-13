import { LegalExplainerQuestion } from "@/types/legal";
import QuestionItemsList from "./QuestionItemsList";

type Props = {
  questions: LegalExplainerQuestion[];
  skipSlugs?: string[];
  prefix?: string;
};

export default function QuestionList({ questions, skipSlugs = [], prefix = "" }: Props) {
  return (
    <div className="mt-12">
      <div className="relative max-w-3xl">
        <div className="absolute top-[-25px] left-0">
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            {(prefix != "" ? (prefix + " "): "") + "QUESTIONS"}
          </span>
        </div>
      </div>
      <QuestionItemsList
        questions={questions}
        hideExcerpt={true}
      />
    </div>
  );
}
