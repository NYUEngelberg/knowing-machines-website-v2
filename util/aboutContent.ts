import { TeamDirectory, TeamMember, TeamType } from "@/types/about";
import { getHtmlFromMdFile, getFilesFromDir } from "./markdownHelpers";

export async function getAboutsPageIntro() {
  const intro = await getHtmlFromMdFile("content/about/intro.md");
  return intro;
}

export async function getContactSection() {
  const contactSection = await getHtmlFromMdFile("content/about/contact.md");
  return contactSection;
}

const teamDirectoriesByTeamType = new Map([
  [TeamType.Current, {imgDir: "public/img/about/team", mdDir: "content/about/team"}],
  [TeamType.Alumni, {imgDir: "public/img/about/alumni", mdDir: "content/about/alumni"}]
])

export async function getTeam(teamType: TeamType): Promise<TeamMember[]> {
  const teamDirs = teamDirectoriesByTeamType.get(teamType) as TeamDirectory;
  const imgDir = teamDirs.imgDir;
  const mdDir = teamDirs.mdDir;
  const fileNames = getFilesFromDir(imgDir);
  let teamContent = await Promise.all(
    fileNames.map(async (fileName) => {
      const imgSrc = imgDir.replace('public', '') + "/" +fileName;
      const mdFileName = mdDir + "/" + fileName.replace(/\..+$/, '.md');
      const bio = await getHtmlFromMdFile(mdFileName);
      return {
        imgSrc, bio
      }
    })
  );
  return teamContent;
}




