import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { visit, SKIP } from "unist-util-visit";
import { filter } from "unist-util-filter";
import { u } from "unist-builder";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";
import { markdownToHtml } from "../../util/markdownHelpers";
import Layout from "@/components/Layout";
import NWaysImage from "@/components/n-ways-to-see/NWaysImage";
import NWaysGrid from "@/components/n-ways-to-see/NWaysGrid";
import NWaysCarousel from "@/components/n-ways-to-see/NWaysCarousel";
import CollectionLinks from "@/components/collection-essay/CollectionLinks";
import { getPublicationBySlug, getEssaysForPublicationSlug } from "@/util/publications";

export default function NWaysPage({ content, frontmatter, publication, publicationEssays }) {
  const metaOgTagData = {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    url: `https://knowingmachines.org/publications/${publication.slug}/essays/${frontmatter.slug}`,
    imageUrl: "https://knowingmachines.org" + frontmatter.coverImg,
    imageAlt: frontmatter.coverImgAlt,
  };
  const apiURL = "https://machinist.smokingheaps.net/api";
  const [htmlOutput, setHtmlOutput] = useState("");
  const [sections, setSections] = useState([]);
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
    const htmlOutput = markdownToHtml(content).then((output) => {
      const AST = unified().use(remarkParse).use(remarkGfm).parse(content);
      let sections = [];
      let footnotes = {};
      Object.assign(footnotes, { type: "root", children: [] });
      visit(AST, ["text", ...elementTypes], (node) => {
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
            content: toHtml(toHast(mda, { allowDangerousHtml: true }), {
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
            content: toHtml(toHast(mda, { allowDangerousHtml: true }), {
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
            content: toHtml(toHast(mda, { allowDangerousHtml: true }), {
              allowDangerousHtml: true,
            }),
            className: node.type,
          });
          return SKIP;
        } else if (elementTypes.includes(node.type)) {
          const mda = u("root", u(node.type, node.children));

          sections.push({
            type: node.parent ? node.parent.type : node.type,
            content: toHtml(toHast(mda, { allowDangerousHtml: true }), {
              allowDangerousHtml: true,
            }),
            className: node.type,
          });
          return SKIP;
        }
      });
      setHtmlOutput(output);
      const filteredFootnotes = filter(
        toHast(footnotes),
        (node) => node.tagName !== "sup"
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

  function loadEmbed(type, id) {
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
    <Layout metaOgTagData={metaOgTagData} navbarDefaultCollapsed={false}>
      <div className="p-6 grid grid-column-[minmax(0,1fr)] justify-center gap-[20px]">
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
              href="/publications/9-ways-to-see"
            >
              ← collection |
            </a>
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
                {["footnote", ...elementTypes].includes(section.type) ? (
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
                ) : (
                  <>{loadEmbed(section.type, section.id)}</>
                )}
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
        <CollectionLinks
          publication={publication}
          publicationEssays={publicationEssays}/>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content", "9-ways-to-see"));
  const temppaths = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "9-ways-to-see", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    if (frontmatter.draft === false) {
      return { params: { slug: filename.replace(".md", "") } };
    } else {
      return null;
    }
  });
  const paths = temppaths.filter((path) => {
    return path && path;
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("content", "9-ways-to-see", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  const publication = await getPublicationBySlug("9-ways-to-see");

  const publicationEssays = getEssaysForPublicationSlug(publication.slug);
  return { props: { frontmatter, slug, content, publication, publicationEssays } };
}
