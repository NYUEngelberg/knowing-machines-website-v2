import { markdownToHtmlSections } from "@/util/markdownHelpers";
import NWaysGrid from "@/components/n-ways-to-see/NWaysGrid";
import NWaysImage from "@/components/n-ways-to-see/NWaysImage";
import NWaysCarousel from "@/components/n-ways-to-see/NWaysCarousel";

type Props = {
  markdownContent: string;
  frontmatter: any;
};

export default function EssayMarkdownContent({
  markdownContent,
  frontmatter,
}: Props) {
  const sections = markdownToHtmlSections(markdownContent);
  const elementTypes = [
    "heading",
    "paragraph",
    "strong",
    "list",
    "footnoteDefinition",
    "html",
    "image",
  ];
  const apiURL = "/n-ways-to-see-a-dataset";
  function loadEmbed(type:string, id:string) {
    const item = frontmatter[id.slice(1, -1).slice(1)];
    switch (type) {
      case ":grid":
        return (
          <NWaysGrid
            title={item.caption}
            collection={item.collection}
            apiURL={apiURL}
          />
        );
        break;
      case ":carousel":
        return (
          <NWaysCarousel
            title={item.caption}
            collection={item.collection}
            apiURL={apiURL}
          />
        );
        break;
      default:
        return (
          <NWaysImage
            title={item.caption}
            imagePath={item.imagePath}
            apiURL={apiURL}
            fileIndex={item.fileIndex}
          />
        );
    }
  }
  return (
    <div className="max-w-3xl markdown-content pt-4">
      {sections.length > 0 &&
        sections.map((section, idx) => (
          <div key={idx}>
            {["footnote", ...elementTypes].includes(section.type) ? (
            <div
              key={idx}
              className={`markdown-content ${section.className}`}
              dangerouslySetInnerHTML={{
                __html: section.content || "",
              }}
            />
            ) : (
              <>{loadEmbed(section.type, section.id)}</>
            )}
          </div>
        ))}
    </div>
  );
}
