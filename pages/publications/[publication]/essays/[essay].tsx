import Layout from "@/components/Layout";
import CollectionLinks from "@/components/collection-essay/CollectionLinks";
import EssayMarkdownContent from "@/components/collection-essay/EssayMarkdownContent";
import EssayTopSection from "@/components/collection-essay/EssayTopSection";
import { PublicationCollectionItem, PublicationMetaData } from "@/types/publications";
import { getStaticPublicationEssayPathsFromMdFilesDirectory } from "@/util/markdownHelpers";
import {
  getEssaysForPublicationSlug,
  getPageMetaOgTagDataForPublicationItem,
  getPublicationBySlug,
  getPublicationsWithEssays
} from "@/util/publications";
import { GetStaticProps } from "next";

type Props = {
  essay: PublicationCollectionItem;
  publicationEssays: PublicationCollectionItem[];
  publication: PublicationMetaData;
};

export default function EssayPage({ essay, publicationEssays, publication }: Props) {
  return (
    <Layout metaOgTagData={getPageMetaOgTagDataForPublicationItem(essay)}>
      <div className="p-6 grid grid-column-[minmax(0,1fr)] justify-center gap-[20px]">
        <EssayTopSection essay={essay} publication={publication} />
        <EssayMarkdownContent
          markdownContent={essay.content || ""}
          frontmatter={essay.frontmatter || {}}/>
        <CollectionLinks
          publication={publication}
          publicationEssays={publicationEssays}/>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const publicationsWithEssays = getPublicationsWithEssays();
  const paths = publicationsWithEssays.flatMap(getStaticPublicationEssayPathsFromMdFilesDirectory);
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const publicationSlug = context.params?.publication + "";
  const essaySlug = context.params?.essay + "";
  const publication = await getPublicationBySlug(publicationSlug);
  const publicationEssays = getEssaysForPublicationSlug(publicationSlug);
  const essay = publicationEssays.find((r) => r.slug === essaySlug);
  return { props: { essay, publicationEssays, publication } };
};
