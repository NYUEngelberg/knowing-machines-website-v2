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

async function getSetCollectionItems(index: number): Promise<WorkingSetCollectionItem[]> {
  const setDirNames = getSetDirs();
  const dirName = setDirNames[index - 1];
  const collectionDir = `content/sets/${dirName}/collection`;
  const fileNames = getFilesFromDir(collectionDir);
  const collectionItems = await Promise.all(fileNames.map(async (fileName) => {
    const itemIndex = Number(fileName.split("-")[0]);
    const regex = /\d+-\[([^\]]+)\]-([^\[]+)-\[([^\]]+)\]-(.+)\.md/;
    const [__, contentType, title, preposition, authors] = fileName.match(regex) as string[];
    const excerpt = await getHtmlFromMdFile(`content/sets/${dirName}/collection/${fileName}`);
    return {
      index: itemIndex,
      contentType: contentType,
      preposition: preposition.replaceAll("-", " "),
      title: title.replaceAll("-", " "),
      excerpt: excerpt,
      authors: authors.replaceAll("-", " "),
      href: "/"
    };
  }));
  return collectionItems;
}

export async function getActiveSet():Promise<WorkingSet> {
  const sets = getSets();
  const activeSet = sets[0];
  const activeSetDescription = await getSetDescription(activeSet.index);
  const collection = await getSetCollectionItems(activeSet.index);
  return {
    ...activeSet,
    description: activeSetDescription,
    collection
  }
}