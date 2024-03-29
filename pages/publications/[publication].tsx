import Layout from "@/components/Layout";
import PartialBulkyBorder from "@/components/PartialBulkyBorder";
import CollectionItemsList from "@/components/collection-essay/CollectionItemsList";
import { MetaOgTagData } from "@/types/meta";
import {
  PublicationCollectionItem,
  PublicationMetaData,
} from "@/types/publications";
import {
  getEssaysForPublicationSlug,
  getPublicationByHref,
  getPublicationBySlug,
  getPublicationPageSlugs,
} from "@/util/publications";

type Props = {
  publication: PublicationMetaData;
  publicationEssays: PublicationCollectionItem[]
};

export default function PublicationPage({ publication, publicationEssays }: Props) {
  const metaOgTagData:MetaOgTagData = {
    title: publication.title,
    description: publication.excerpt,
    url: "https://knowingmachines.org/publications/" + publication.slug,
    imageUrl: "https://knowingmachines.org" + publication.coverImg,
    imageAlt: "https://knowingmachines.org" + publication.coverImgAlt,
  }
  return (
    <Layout metaOgTagData={metaOgTagData} navbarDefaultCollapsed={false}>
      <div className="p-6 grid grid-column-[minmax(0,1fr)] justify-center gap-[40px]">
        <div className="relative my-12 p-6 border-black border-[1px] border-b-0">
          <div
            className="max-w-3xl w-full h-[265px] bg-center bg-cover"
            style={{ backgroundImage: "url(" + publication.coverImg + ")" }}
            title={publication.coverImgAlt}
          ></div>
          <div className="absolute top-[-4px] right-[-4px] h-[4px] w-[250px] bg-black"></div>
          <div className="absolute top-[-4px] right-[-4px] h-[100px] w-[4px] bg-black"></div>
          <div className="absolute bottom-0 left-0 h-[4px] w-[100px] bg-black"></div>
          <span className="absolute -top-6 left-[-1px] content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            {publication.contentType}
          </span>
        </div>
        <div className="py-3 px-6 border-t-[2px] border-black uppercase font-bold text-[20px] justify-self-center text-center max-w-[450px] tracking-widest ">
          {publication.title}
        </div>
        <div className="max-w-3xl">
          <div className="text-sm markdown-content"
            dangerouslySetInnerHTML={{
              __html: publication.intro || "",
            }}
          ></div>
        </div>
        <CollectionItemsList collectionItems={[
          ...(publication.nonEssayCollectionItems || []),
          ...publicationEssays,
        ]} />
      </div>
      <></>
    </Layout>
  );
}

export async function getStaticPaths() {
  const publicationStaticSlugs = getPublicationPageSlugs();
  return {
    paths: publicationStaticSlugs.map((publication) => ({
      params: { publication },
    })),
    //[{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const slug: string = context.params.publication;
  const href = "/publications/" + slug;
  let publication = await getPublicationByHref(href) as PublicationMetaData;
  if (publication == null) {
    publication = await getPublicationBySlug(slug);
  }

  const publicationEssays = getEssaysForPublicationSlug(publication.slug || "");
  return {
    // Passed to the page component as props
    props: { publication, publicationEssays },
  };
}
