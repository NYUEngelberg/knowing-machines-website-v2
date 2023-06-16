import previewsData from "@/data/publications.json";
import { PublicationMetaData } from "@/types/publications";

export function getPublicationPreviews() {
    const publicationPreviews: PublicationMetaData[] = previewsData;
    return publicationPreviews;
}

export function getPublicationPagePaths() {
    const publicationPagePaths = ["9_ways_to_see_a_dataset"];
    return publicationPagePaths;
}

export function getPublicationByHref(href: string) {
    const publicationPreviews: PublicationMetaData[] = previewsData;
    const publication = publicationPreviews.find(p => p.href === href);
    return publication;
}