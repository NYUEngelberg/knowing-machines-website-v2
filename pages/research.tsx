import Layout from "@/components/Layout";
import PublicationsSection from "@/components/PublicationsSection";
import { PublicationMetaData } from "@/types/publications";
import { getPublicationPreviews } from "@/util/publications";
import { MetaOgTagData } from "@/types/meta";

type Props = {
  publicationPreviews: PublicationMetaData[]
};

export default function ResearchPage({ publicationPreviews }: Props) {
  const metaOgTagData:MetaOgTagData = {
    title: "Knowing Machines Research",
    description: "Knowing Machines is a research project tracing the histories, practices, and politics of how machine learning systems are trained to interpret the world.",
    url: "https://knowingmachines.org/research",
    imageUrl: "https://knowingmachines.org/img/field_guide_black_1.png",
    imageAlt: "a geometric pattern of boxes evoking a spreadsheet",
  }
  return (
    <Layout metaOgTagData={metaOgTagData}>
      <main
        className={
          "max-w-[900px] mx-auto my-12" +
          " md:grid " +
          " md:grid-cols-[minmax(0,1fr)] md:gap-[40px]"
        }
      >
        <PublicationsSection
            isResearchPage={true}
            publicationPreviews={publicationPreviews}/>
      </main>
      <></>
    </Layout>
  );
}

export async function getStaticProps() {
  const publicationPreviews = getPublicationPreviews();
  return {
    props: {
      publicationPreviews
    },
  };
}
