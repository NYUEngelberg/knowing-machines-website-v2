import previewsData from "@/data/publications.json";
import { PublicationMetaData } from "@/types/publications";
import { getHtmlFromMdFile } from "./markdownHelpers";

export function getPublicationPreviews() {
    const publicationPreviews: PublicationMetaData[] = previewsData;
    return publicationPreviews;
}

export function getPublicationPagePaths() {
    const publicationPagePaths = ["9_ways_to_see_a_dataset"];
    return publicationPagePaths;
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