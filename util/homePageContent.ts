import { getHtmlFromMdFile } from "./markdownHelpers";

export async function getHomePageIntro() {
  const intro = await getHtmlFromMdFile("content/home/intro.md");
  return intro;
}