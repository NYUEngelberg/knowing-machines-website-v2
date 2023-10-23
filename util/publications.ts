import previewsData from "@/data/publications.json";
import { PublicationCollectionItem, PublicationMetaData } from "@/types/publications";
import { getHtmlFromMdFile } from "./markdownHelpers";
import { MetaOgTagData } from "@/types/meta";

export function getPublicationPreviews() {
    const publicationPreviews: PublicationMetaData[] = previewsData;
    return publicationPreviews;
}

export function getPublicationPagePaths() {
    const publicationPagePaths = ["9_ways_to_see_a_dataset", "knowing_legal_machines"];
    return publicationPagePaths;
}

export function getPublicationCollectionItemEssays(publication: string):string[] {
    return [];
}

export function getPublicationEssays(publication: string): PublicationCollectionItem[] {
    return [];
}

export async function getPublicationByHref(href: string) {
    const publicationPreviews: PublicationMetaData[] = previewsData;
    const publication = publicationPreviews.find(p => p.href === href) as PublicationMetaData;
    const introPath = publication.intro;
    if (introPath != null) {
        const intro = await getHtmlFromMdFile(introPath);
        return {
            ...publication,
            intro
        }
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