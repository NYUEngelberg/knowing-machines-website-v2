import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import { additionalFormatting } from "./formatting";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { visit, SKIP } from "unist-util-visit";
import { filter } from "unist-util-filter";
import { u } from "unist-builder";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";

export async function getHtmlFromMdFile(mdFilePath: string) {
  const markdownContent = getMarkdownContentFromFile(mdFilePath);
  const htmlContent = await markdownToHtml(markdownContent);
  return htmlContent;
}

export function getFilesFromDir(dirPath: string) {
  const absoluteDirPath = path.join(process.cwd(), dirPath);
  const fileNames = fs
    .readdirSync(absoluteDirPath)
    .filter((f) => !/^\./.test(f));
  return fileNames;
}

export function getMdFilesFromDir(dirPath: string) {
  const fileNames = getFilesFromDir(dirPath);
  const mdFileNames = fileNames.filter((fileName) => /\.md$/.test(fileName));
  return mdFileNames;
}

export async function getHtmlFromMdFilesInDir(dirPath: string) {
  const fileNames = getMdFilesFromDir(dirPath);
  let content = await Promise.all(
    fileNames.map(async (fileName) => {
      return await getHtmlFromMdFile(dirPath + "/" + fileName);
    })
  );
  return content;
}

export function getMarkdownContentFromFile(mdFilePath: string) {
  const filePath = path.join(process.cwd(), mdFilePath);
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  return matterResult.content;
}

export async function markdownToHtml(markdownContent: string) {
  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(markdownContent);
  const htmlContent = processedContent.toString();
  return additionalFormatting(htmlContent);
}

export async function getStaticPathsFromMdFilesDirectory(
  directoryBasePath: string
) {
  const files = fs.readdirSync(path.join(directoryBasePath));
  const temppaths = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(directoryBasePath, filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    if (frontmatter.draft === false) {
      return { params: { slug: frontmatter.slug } };
    } else {
      return null;
    }
  });
  const paths = temppaths.filter((path) => {
    return path && path;
  });
  return paths;
}


export function markdownToHtmlSectionsForElementTypes(markdown: string, elementTypes: string[]):any[] {
  const areFootnotesIgnored = elementTypes.indexOf("footnoteDefinition") === -1;
  const AST = unified().use(remarkParse).use(remarkGfm).parse(markdown);
      let sections:any[] = [];
      let footnotes:any = {};
      Object.assign(footnotes, { type: "root", children: [] });
      visit(AST, ["text", "footnoteDefinition", ...elementTypes], (node:any) => {
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
      if (!areFootnotesIgnored && filteredFootnotes.children.length > 0) {
        sections.push({
          type: "paragraph",
          tagName: "div",
          content: toHtml(filteredFootnotes),
        });
      }
  return sections;
}

export function markdownToHtmlSections(markdown:string):any[] {
  const elementTypes = [
    "heading",
    "paragraph",
    "strong",
    "list",
    "footnoteDefinition",
    "html",
    "image",
  ];
  return markdownToHtmlSectionsForElementTypes(markdown, elementTypes);
}

export function markdownToHtmlSectionsWithoutFootnotes(markdown: string):any[] {
  const elementTypes = [
    "heading",
    "paragraph",
    "strong",
    "list",
    "html",
    "image",
  ];
  return markdownToHtmlSectionsForElementTypes(markdown, elementTypes);
}

export function extractFootnoteDefinitionsFromMarkdown(markdown:string):any[] {
  const elementTypes = [
    "footnoteDefinition",
  ];
  return markdownToHtmlSectionsForElementTypes(markdown, elementTypes);
}