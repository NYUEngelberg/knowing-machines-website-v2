import PartialBulkyBorder from "@/components/PartialBulkyBorder"
import { LegalExplainerQuestion } from "@/types/legal"

import { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { visit, SKIP } from "unist-util-visit";
import { filter } from "unist-util-filter";
import { u } from "unist-builder";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";

type Props = {
    question: LegalExplainerQuestion
}

export default function LongAnswerSection ({question}: Props) {
    const [sections, setSections] = useState<any[]>([]);
    const elementTypes = [
      "heading",
      "paragraph",
      "strong",
      "list",
      "footnoteDefinition",
      "html",
      "image",
    ];
  
    useEffect(() => {
        const AST = unified().use(remarkParse).use(remarkGfm).parse(question.longAnswer);
        let footnotes:any = {};
        Object.assign(footnotes, { type: "root", children: [] });
        visit(AST, ["text", ...elementTypes], (node:any) => {
          if (node.children && node.children[0]?.value?.startsWith("[:")) {
            sections.push({
              type: node.children[0].value.slice(1, -1).split("-")[0],
              id: node.children[0].value,
            });
          } else if (node.type === "footnoteDefinition") {
            node.type = "footnote";
            footnotes.children.push(node);
            return SKIP;
          } else if (node.type === "html") {
            const mda = u(node.type, { value: node.value });
            sections.push({
              type: node.type,
              content: toHtml(toHast(mda, { allowDangerousHtml: true }) as any, {
                allowDangerousHtml: true,
              }),
              className: `${node.type} w-full flex justify-center items-center mb-8`,
            });
          } else if (["list", "strong", "heading"].includes(node.type)) {
            const mda = u(
              "root",
              u(node.type, {
                children: node.children,
                depth: node.depth,
              })
            );
            sections.push({
              type: node.parent ? node.parent.type : node.type,
              content: toHtml(toHast(mda, { allowDangerousHtml: true }) as any, {
                allowDangerousHtml: true,
              }),
              className: node.type,
            });
            return SKIP;
          } else if (node.children && node.children[0].type === "image") {
            const img = node.children[0];
            const mda = u(img.type, {
              url: img.url,
              alt: img.alt,
              title: img.title,
              width: "100%",
            });
            sections.push({
              type: img.type,
              content: toHtml(toHast(mda, { allowDangerousHtml: true }) as any, {
                allowDangerousHtml: true,
              }),
              className: node.type,
            });
            return SKIP;
          } else if (elementTypes.includes(node.type)) {
            const mda = u("root", u(node.type, node.children));
  
            sections.push({
              type: node.parent ? node.parent.type : node.type,
              content: toHtml(toHast(mda, { allowDangerousHtml: true }) as any, {
                allowDangerousHtml: true,
              }),
              className: node.type,
            });
            return SKIP;
          }
        });
        const filteredFootnotes = filter(
          toHast(footnotes) as any,
          (node:any) => node.tagName !== "sup"
        );
        if (filteredFootnotes.children.length > 0) {
          sections.push({
            type: "paragraph",
            tagName: "div",
            content: toHtml(filteredFootnotes),
          });
        }
        setSections(sections);
    }, []);
    return <div
    className="pb-6 flex flex-col items-stretch gap-[40px]"
  >
    <div
      id="set-collection-items"
      className="relative border-black border-t-[1px] relative"
    >
        <PartialBulkyBorder
          total={5}
          i={3}
          bottom={false}
        />
      <div
          className="flex flex-col items-center gap-[10px] mt-8"
        >
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            LONG ANSWER
          </span>
          
          <div className="max-w-3xl markdown-content">
              {sections.length > 0 &&
                sections.map((section, idx) => (
                  <div key={idx}>
                    
                      <div
                        key={idx}
                        className={`markdown-content ${
                          section.type === "image"
                            ? "max-w-xl mx-auto"
                            : "max-w-3xl"
                        } ${section.className}`}
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
}