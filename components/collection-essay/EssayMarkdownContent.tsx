import { markdownToHtmlSections } from "@/util/markdownHelpers"

type Props = {
    markdownContent: string
}

export default function EssayMarkdownContent({markdownContent}:Props) {
    const sections = markdownToHtmlSections(markdownContent);
    return <div className="max-w-3xl markdown-content pt-4">
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
}