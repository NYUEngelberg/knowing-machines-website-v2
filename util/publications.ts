import publicationsJson from "@/data/publications.json";
import {
  PublicationCollectionItem,
  PublicationMetaData,
} from "@/types/publications";
import {
  getHtmlFromMdFile,
  getMarkdownWithMetaFromFile,
  getMdFileNamesForPublication,
} from "./markdownHelpers";
import { MetaOgTagData } from "@/types/meta";
import matter from "gray-matter";
import path from "path";

export function getPublicationPreviews() {
  const publicationPreviews: PublicationMetaData[] = publicationsJson;
  return publicationPreviews;
}

export function getPublicationPagePaths() {
  const publicationPagePaths = [
    "9_ways_to_see_a_dataset",
    "knowing_legal_machines",
  ];
  return publicationPagePaths;
}

export function getPublicationCollectionItemEssays(
  publication: string
): string[] {
  return [];
}

export function getPublicationsWithEssays(): PublicationMetaData[] {
  const publicationData: PublicationMetaData[] = publicationsJson;
  const publicationsWithEssays = publicationData.filter(
    (r) => r.external === false
  );
  return publicationsWithEssays;
}

export function getEssaysForPublication(
  publication: PublicationMetaData
): PublicationCollectionItem[] {
  const essayFileNames = getMdFileNamesForPublication(publication);
  const essays = essayFileNames.map((fileName) => {
      const { frontmatter, content } = getMarkdownWithMetaFromFile(
        path.join("content", publication.contentPath || "", fileName)
      );
      return {
        index: frontmatter.index || "",
        contentType: frontmatter.contentType || "",
        content: content || "",
        title: frontmatter.title || "",
        slug: frontmatter.slug || "",
        img: frontmatter.img || "",
        imgAlt: frontmatter.imgAlt || "",
        preposition: frontmatter.preposition || "",
        authors: frontmatter.authors || "",
        excerpt: frontmatter.excerpt || "",
        href: frontmatter.href || "",
      };
    });
  return essays;
}

export function getEssaysForPublicationSlug(
  publicationSlug: string
): PublicationCollectionItem[] {
  const publicationsWithEssays = getPublicationsWithEssays();
  const publication = publicationsWithEssays.find(
    (r) => r.slug === publicationSlug
  );
  if (publication == null) {
    return [];
  } else {
    return getEssaysForPublication(publication);
  }
}

export async function getPublicationByHref(href: string) {
  const publicationData: PublicationMetaData[] = publicationsJson;
  const publication = publicationData.find(
    (p) => p.href === href
  ) as PublicationMetaData;
  const introPath = publication.intro;
  if (introPath != null) {
    const intro = await getHtmlFromMdFile(introPath);
    return {
      ...publication,
      intro,
    };
  }
  return publication;
}

export function getPageMetaOgTagDataForPublicationItem(
  item: PublicationCollectionItem
): MetaOgTagData {
  const metaOgTagData = {
    title: item.title,
    description: item.excerpt,
    url: item.href,
    imageUrl: item.img,
    imageAlt: item.imgAlt || "",
  };
  return metaOgTagData;
}
