import { PublicationCollectionItem } from "@/types/publications";
import PartialBulkyBorder from "../PartialBulkyBorder";
import { LegalExplainerQuestion } from "@/types/legal";

type Props = {
  questions: LegalExplainerQuestion[] | undefined;
  hideExcerpt?: boolean;
  hidePartialBulkyBorder?: boolean;
};

export default function QuestionItemsList({
  questions,
  hideExcerpt,
  hidePartialBulkyBorder,
}: Props) {
  return (
    <div className="max-w-3xl">
      {(questions || [])
        .sort((a, b) => a.index - b.index)
        .map((item) => (
          <div
            key={item.title}
            className="pb-[0.8rem] flex flex-col items-stretch gap-[40px]"
          >
            <div
              id="set-collection-items"
              className="relative border-black border-t-[1px] relative"
            >
              {!hidePartialBulkyBorder && (
                <PartialBulkyBorder
                  total={(questions || []).length}
                  i={item.index - 1}
                  bottom={false}
                />
              )}
              <div>
                <a
                  href={
                    "/knowing-legal-machines/legal-explainer/questions/" +
                    item.slug
                  }
                  className="flex flex-row items-center gap-[18px] mt-[1.5rem]"
                >
                  <h3 className="flex-grow font-bold leading-tight">
                    {item.title}
                  </h3>
                  <img
                    src="/img/arrow-top-right.svg"
                    className="link-arrow-magic pr-2"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
