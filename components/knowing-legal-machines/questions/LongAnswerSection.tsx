import PartialBulkyBorder from "@/components/PartialBulkyBorder";
import { LegalExplainerQuestion } from "@/types/legal";
import { markdownToHtmlSectionsWithoutFootnotes } from "@/util/markdownHelpers";

type Props = {
  markdownContent: string;
};

export default function LongAnswerSection({ markdownContent }: Props) {
  const sections = markdownToHtmlSectionsWithoutFootnotes(markdownContent);
  return (
    <div className="pb-6 flex flex-col items-stretch gap-[40px]">
      <div
        id="set-collection-items"
        className="relative border-black border-t-[1px] relative"
      >
        <PartialBulkyBorder total={5} i={3} bottom={false} />
        <div className="flex flex-col items-center gap-[10px] mt-8">
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            LONG ANSWER
          </span>

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
      </div>
    </div>
  );
}
