import Layout from "@/components/Layout";
import { PublicationCollectionItem } from "@/types/publications";
import { getStaticPublicationEssayPathsFromMdFilesDirectory } from "@/util/markdownHelpers";
import {
  getEssaysForPublicationSlug,
  getPageMetaOgTagDataForPublicationItem,
  getPublicationsWithEssays
} from "@/util/publications";
import { GetStaticProps } from "next";

type Props = {
  essay: PublicationCollectionItem;
  otherEssays: PublicationCollectionItem[];
};

export default function EssayPage({ essay, otherEssays }: Props) {
  return (
    <Layout metaOgTagData={getPageMetaOgTagDataForPublicationItem(essay)}>
      <div className="p-6 grid grid-column-[minmax(0,1fr)] justify-center gap-[20px]">
        <div className="relative my-12 p-6 border-black border-[1px] border-b-0">
          <div
            className="max-w-3xl w-full h-[265.93px] bg-center bg-cover"
            style={{ backgroundImage: "url(" + essay.img + ")" }}
            role="img"
            aria-label={essay.imgAlt}
          ></div>
          <div className="absolute top-[-4px] right-[-4px] h-[4px] w-[250px] bg-black"></div>
          <div className="absolute top-[-4px] right-[-4px] h-[100px] w-[4px] bg-black"></div>
          <div className="absolute bottom-0 left-0 h-[4px] w-[100px] bg-black"></div>
          <div className="absolute -top-6 left-[-1px] text-xs text-white uppercase bg-black self-start">
            <a
              className="inline-block pl-2 p-1 hover:bg-[#1400FF] hover:text-white no-underline"
              href="/publications/9_ways_to_see_a_dataset"
            >
              ← collection |
            </a>
            <span className="inline-block pr-2 p-1 pl-0">
              {" "}
               {essay.contentType}
            </span>
          </div>
        </div>
        <div className="text-left max-w-3xl uppercase font-bold text-[20px] tracking-widest ">
          {essay.title}
        </div>
        <div className="text-left text-xs self-stretch max-w-3xl ">
          <span className="font-bold uppercase">{essay.authors}</span>
        </div>
        {/* <pre>{JSON.stringify(essay, null, 2)}</pre> */}
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
