import Layout from "@/components/Layout";
import { PublicationCollectionItem } from "@/types/publications";
import { getStaticPublicationEssayPathsFromMdFilesDirectory } from "@/util/markdownHelpers";
import {
  getPageMetaOgTagDataForPublicationItem,
  getPublicationCollectionItemEssays,
  getPublicationsWithEssays,
  getEssaysForPublicationSlug,
} from "@/util/publications";
import { GetStaticProps } from "next";

type Props = {
  essay: PublicationCollectionItem;
  otherEssays: PublicationCollectionItem[];
};

export default function EssayPage({ essay, otherEssays }: Props) {
  return (
    <Layout metaOgTagData={getPageMetaOgTagDataForPublicationItem(essay)}>
      <div className="py-12 mx-auto max-w-3xl">
        <pre>{JSON.stringify(essay, null, 2)}</pre>
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
  const publicationEssays = getEssaysForPublicationSlug(publicationSlug);
  const essay = publicationEssays.find((r) => r.slug === essaySlug);
  const otherEssays = publicationEssays.filter((r) => r.slug !== essaySlug);
  return { props: { essay, otherEssays } };
};
