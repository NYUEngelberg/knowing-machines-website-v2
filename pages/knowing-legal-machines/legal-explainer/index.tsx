import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { getPublicationByHref } from "@/util/publications";
import { PublicationMetaData } from "@/types/publications";
import { useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { visit, SKIP } from "unist-util-visit";
import { filter } from "unist-util-filter";
import { u } from "unist-builder";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";
import { markdownToHtml } from "@/util/markdownHelpers";
import Layout from "@/components/Layout";
import QuestionList from "@/components/knowing-legal-machines/QuestionList";
import { getLegalExplainerQuestions } from "@/util/legalExplainer/questions";
import { LegalCase, LegalExplainerQuestion } from "@/types/legal";
import { getLegalCases } from "@/util/legalExplainer/cases";
import LegalCasesList from "@/components/knowing-legal-machines/LegalCasesList";

type Props = {
    content: string,
    frontmatter: {
        [key: string]: any;
    },
    publication: PublicationMetaData,
    questions: LegalExplainerQuestion[],
    legalCases: LegalCase[]
}

export default function LegalExplainerPage ({content, frontmatter, publication, questions, legalCases}: Props) {
    const metaOgTagData = {
        title: frontmatter.title,
        description: frontmatter.excerpt,
        url: "knowing-legal-machines/legal-explainer",
        imageUrl: "https://knowingmachines.org" + frontmatter.coverImg,
        imageAlt: frontmatter.coverImgAlt,
      };
      const [htmlOutput, setHtmlOutput] = useState("");
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
        markdownToHtml(content).then((output) => {
          const AST = unified().use(remarkParse).use(remarkGfm).parse(content);
          let sections:any[] = [];
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
          setHtmlOutput(output);
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
          return setSections(sections);
        });
      }, []);
    
      return (
        <Layout metaOgTagData={metaOgTagData} navbarDefaultCollapsed={false}>
          <div className="p-6 grid grid-column-[minmax(0,1fr)] justify-center gap-[40px] sm:gap-[20px]">
            <div className="relative my-12 p-6 border-black border-[1px] border-b-0">
              <div
                className="max-w-3xl w-full h-[265.93px] bg-center bg-cover"
                style={{ backgroundImage: "url(" + frontmatter.coverImg + ")" }}
                role="img"
                aria-label={frontmatter.coverImgAlt}
              ></div>
              <div className="absolute top-[-4px] right-[-4px] h-[4px] w-[250px] bg-black"></div>
              <div className="absolute top-[-4px] right-[-4px] h-[100px] w-[4px] bg-black"></div>
              <div className="absolute bottom-0 left-0 h-[4px] w-[100px] bg-black"></div>
              <div className="absolute -top-6 left-[-1px] text-xs text-white uppercase bg-black self-start">
                <a
                  className="inline-block pl-2 p-1 hover:bg-[#1400FF] hover:text-white no-underline"
                  href="/publications/knowing_legal_machines"
                >← collection |</a>
                <span className="inline-block pr-2 p-1 pl-0">
                  {" "}
                 {frontmatter.contentType}
                </span>
              </div>
            </div>
            <div className="text-left max-w-3xl uppercase font-bold text-[20px] tracking-widest ">
              {frontmatter.title}
            </div>
            <div className="text-left text-xs self-stretch max-w-3xl ">
              <span className="font-bold uppercase">{frontmatter.authors}</span>
            </div>
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
            <style jsx global>{`
              p {
                margin-bottom: 1.2em !important;
              }
              b,
              strong,
              .strong {
                font-weight: bolder;
              }
              ul {
                list-style: disc;
                margin-left: 1em;
                margin-bottom: 2em;
              }
              .li::first-of-type {
                margin-top: -1em;
              }
              h2 {
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 1em;
                text-transform: uppercase;
              }
              h3 {
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 1em;
              }
              h4 {
                font-size: 14px;
                font-weight: 700;
                margin-bottom: 1em;
              }
              h5 {
                font-size: 12px;
                font-weight: 700;
                margin-bottom: 1em;
              }
              .paragraph > img {
                width: 100%;
                height: auto;
                margin-bottom: 1em;
              }
              .footnotes {
                margin-top: 4em;
              }
            `}</style>
            <div>
              <QuestionList questions={questions}/>
            </div>
            <div>
              <LegalCasesList legalCases={legalCases} />
            </div>
          </div>
        </Layout>
      );
}

export async function getStaticProps({ }) {
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "knowing_legal_machines", "legal_explainer", "intro.md"),
      "utf-8"
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);
  
    const publication = await getPublicationByHref(
      "/publications/knowing_legal_machines"
    );

    const questions = getLegalExplainerQuestions();
    const legalCases = getLegalCases();

    return { props: { frontmatter, content, publication, questions, legalCases } };
  }