import { PublicationMetaData } from "@/types/publications";
import CollectionItemsList from "@/components/collection-essay/CollectionItemsList";
import { LegalExplainerQuestion } from "@/types/legal";
import QuestionItemsList from "./QuestionItemsList";

type Props = {
  questions: LegalExplainerQuestion[];
  skipSlugs?: string[];
};

export default function QuestionList({ questions, skipSlugs = [] }: Props) {
  return (
    <div className="my-12">
      <div className="relative max-w-3xl">
        <div className="absolute top-[-25px] left-0">
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            {"QUESTIONS"}
          </span>
        </div>
      </div>
      <QuestionItemsList
        questions={questions}
        hideExcerpt={true}
        hidePartialBulkyBorder={true}
      />
    </div>
  );
}
