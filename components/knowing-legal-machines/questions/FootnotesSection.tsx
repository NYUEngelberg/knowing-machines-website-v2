import PartialBulkyBorder from "@/components/PartialBulkyBorder";
import { extractFootnoteDefinitionsFromMarkdown } from "@/util/markdownHelpers";

type Props = {
  markdownContent: string;
};

export default function FootnotesSection({ markdownContent }: Props) {
  const footnoteSections =
    extractFootnoteDefinitionsFromMarkdown(markdownContent);
  return (
    <>
      <PartialBulkyBorder total={5} i={3} bottom={false} />
      <div className="max-w-3xl markdown-content">
        {footnoteSections.length > 0 &&
          footnoteSections.map((footnoteSection, idx) => (
            <div key={idx}>
              <div
                key={idx}
                className={`markdown-content ${footnoteSection.className}`}
                dangerouslySetInnerHTML={{
                  __html: footnoteSection.content || "",
                }}
              />
            </div>
          ))}
      </div>
    </>
  );
}
