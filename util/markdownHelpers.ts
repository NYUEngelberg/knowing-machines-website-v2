import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import { additionalFormatting } from "./formatting";

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
