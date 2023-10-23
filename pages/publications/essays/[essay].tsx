import Layout from "@/components/Layout";
import { PublicationCollectionItem } from "@/types/publications";
import {
  getPageMetaOgTagDataForPublicationItem,
  getPublicationCollectionItemEssays,
  getPublicationPagePaths,
  getPublicationEssays
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
        <pre>
            {JSON.stringify(essay, null, 2)}
        </pre>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const publicationStaticPaths = getPublicationPagePaths();
  const publicationEssays = publicationStaticPaths.flatMap((publication) => {
    const essaysSlugs: string[] = getPublicationCollectionItemEssays(publication);
    return essaysSlugs.map((essay) => ({
      publication,
      essay,
    }));
  });
  return {
    paths: publicationEssays.map((obj) => ({
      params: obj,
    })),
    //[{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
    const publication = context.params?.publication + "";
    const essaySlug = context.params?.essay + "";
    const publicationEssays = getPublicationEssays(publication);
    const essay = publicationEssays.find(r => r.slug === essaySlug);
    const otherEssays = publicationEssays.filter(r => r.slug !== essaySlug);
    return { props: { essay, otherEssays } };
  };
  