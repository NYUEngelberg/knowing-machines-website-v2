import { WorkingSet, WorkingSetCollectionItem } from "@/types/sets";
import { getFilesFromDir, getHtmlFromMdFile } from "./markdownHelpers";

// export async function getSet(dirName:string): Promise<WorkingSet[]> {
//     const fileNames = getFilesFromDir(dirName);

//     return {
//         name: string
//         date: string
//         heroImg: string
//         blurb: string
//     };
// }

export function getSetDirs(): string[] {
  const fileNames = getFilesFromDir("content/sets");
  return fileNames;
}

export function getSets(): WorkingSet[] {
  const setDirNames = getSetDirs();
  const sets = setDirNames.map((dirName) => {
    const index = Number(dirName.split("-")[0]);
    const name = dirName.split("-").slice(1).join(" ").toUpperCase();
    return {
      index,
      name,
      date: "MARCH 2023",
      heroImg: "/img/sets/tale-of-two-datasets-dithered.png",
      blurb:
        "Sunt ea est et facilis blanditiis. Vitae distinctio officia sit animi culpa quis molestias. Quia est et ut sunt porro ratione labore et.",
    };
  });
  return sets;
}

export async function getSetDescription(index: number) {
  const setDirNames = getSetDirs();
  const dirName = setDirNames[index - 1];
  const description = await getHtmlFromMdFile(`content/sets/${dirName}/description.md`);
  return description;
}
