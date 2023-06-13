import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit, SKIP } from "unist-util-visit";
import { toHtml } from "hast-util-to-html";
import { markdownToHtml } from "../../util/markdownHelpers";
import Layout from "@/components/Layout";
import NWaysImage from "@/components/n_ways/NWaysImage";
import NWaysGrid from "@/components/n_ways/NWaysGrid";

export default function NWaysPage({ content, frontmatter }) {
  const [htmlOutput, setHtmlOutput] = useState("");
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const htmlOutput = markdownToHtml(content).then((output) => {
      const AST = unified().use(remarkParse).parse(content);
      let sections = [];
      const elementTypes = ["paragraph", "strong"];
      visit(AST, ["text", ...elementTypes], (node) => {
        if (node.type === "text" && node.value.startsWith("[:")) {
          sections.push({
            type: node.value.startsWith("[:image") ? "image" : "grid",
            id: node.value,
          });
        } else if (elementTypes.includes(node.type)) {
          if (
            node.children[0].value &&
            !node.children[0].value.startsWith("[:")
          ) {
            sections.push({
              type: "html",
              content: toHtml(node.children),
            });
          }
        }
      });
      setHtmlOutput(output);
      return setSections(sections);
    });
  }, []);

  function loadEmbed(type, id) {
    const item = frontmatter[id.slice(1, -1).slice(1)];
    return type === "grid" ? (
      <NWaysGrid title={item.caption} collection={item.collection} />
    ) : (
      <NWaysImage title={item.caption} imagePath={item.imagePath} />
    );
  }

  return (
    <Layout title={frontmatter.title} navbarDefaultCollapsed={false}>
      <div className="border-[1px] border-black p-6 flex flex-col items-center gap-[40px]">
        <div className="relative my-12 p-6 border-black border-[1px] border-b-0">
          <img src={frontmatter.coverImg} alt={frontmatter.coverImgAlt} />
          <div className="absolute top-[-4px] right-[-4px] h-[4px] w-[250px] bg-black"></div>
          <div className="absolute top-[-4px] right-[-4px] h-[100px] w-[4px] bg-black"></div>
          <div className="absolute bottom-0 left-0 h-[4px] w-[100px] bg-black"></div>
          <span className="absolute -top-6 left-[-1px] content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            {frontmatter.contentType}
          </span>
        </div>
        <div className="py-3 px-6 border-t-[2px] border-black uppercase font-bold text-[20px] text-center max-w-[450px] tracking-widest ">
          {frontmatter.title}
        </div>
        <div className="text-xs my-6 text-center mx-auto">
          <span className="font-bold uppercase">{frontmatter.authors}</span>
        </div>
        <div className="max-w-3xl">
          {sections.length > 0 &&
            sections.map((section, idx) => (
              <div key={idx}>
                {section.type === "html" ? (
                  <p
                    key={idx}
                    className="max-w-3xl"
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
        `}</style>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content", "n_ways"));
  const temppaths = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "n_ways", filename),
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
    path.join("content", "n_ways", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { props: { frontmatter, slug, content } };
}
