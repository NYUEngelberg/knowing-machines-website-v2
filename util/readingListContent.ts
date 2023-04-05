import { ReadingListChapter } from "@/types/readingList";
import { getHtmlFromMdFile, getMdFilesFromDir } from "./markdownHelpers";

export async function getReadingListIntro() {
  const intro = await getHtmlFromMdFile("content/reading-list/intro.md");
  return intro;
}

export async function getReadingListChapters(): Promise<ReadingListChapter[]> {
  const chapterDir = "content/reading-list/chapters";
  const fileNames = getMdFilesFromDir(chapterDir);
  let chapters = await Promise.all(
    fileNames.map(async (fileName) => {
      return await getReadingListChapter(chapterDir, fileName);
    })
  );
  return chapters;
}

export async function getReadingListChapter(
  chapterDir: string,
  fileName: string
): Promise<ReadingListChapter> {
  const href = fileName.replace(/^\d+\-/, "").replace(".md", "");
  const text = href.replaceAll("-", " ").toUpperCase();
  const content = await getHtmlFromMdFile(chapterDir + "/" + fileName);
  return {
    link: {
      text,
      href,
    },
    content,
  };
}
