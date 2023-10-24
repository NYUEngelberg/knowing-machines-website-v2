import Layout from "@/components/Layout";
import { getHomePageIntro } from "@/util/homePageContent";
import { WorkingSet } from "@/types/sets";
import UpcomingSets from "@/components/sets/UpcomingSets";
import NewsletterFormEmbed from "@/components/NewsletterFormEmbed";
import PublicationsSection from "@/components/PublicationsSection";
import { PublicationMetaData } from "@/types/publications";
import { getPublicationPreviews } from "@/util/publications";
import { MetaOgTagData } from "@/types/meta";

type Props = {
  intro: string;
  publicationPreviews: PublicationMetaData[]
};

export default function Home({ intro, publicationPreviews }: Props) {
  const metaOgTagData:MetaOgTagData = {
    title: "Knowing Machines",
    description: "Knowing Machines is a research project tracing the histories, practices, and politics of how machine learning systems are trained to interpret the world.",
    url: "https://knowingmachines.org",
    imageUrl: "https://knowingmachines.org/img/field_guide_black_1.png",
    imageAlt: "a geometric pattern of boxes evoking a spreadsheet",
  }

  return (
    <Layout metaOgTagData={metaOgTagData} navbarDefaultCollapsed={true}>
      <main
        className={
          "max-w-[1175px] mx-auto py-0" +
          " md:grid " +
          " md:grid-cols-[328px_minmax(0,1fr)] md:gap-[40px]"
        }
      >
        <aside className="mb-10 mx-4 md:mr-0">
          <div className="md:sticky md:top-12">
            <div className="">
              <img src="/img/logo_main.svg" />
            </div>
            <div className="p-6 border border-black mt-10">
              <div
                className="markdown-content text-sm"
                dangerouslySetInnerHTML={{ __html: intro }}
              />
              <a
                href="/about"
                className="uppercase font-bold flex flex-row gap-[20px] items-center"
              >
                <span>Read more</span>
                <img src="/img/right-arrow.png" className="link-arrow-magic" />
              </a>
            </div>
          </div>
        </aside>
        <PublicationsSection publicationPreviews={publicationPreviews}/>
      </main>

      {/* <main className={"max-w-[1175px] mx-auto py-12 "}>
        <UpcomingSets sets={sets} />
      </main> */}
      {/* <main className="py-12 bg-black">
        <NewsletterFormEmbed />
      </main> */}
      <></>
    </Layout>
  );
}

export async function getStaticProps() {
  const intro = await getHomePageIntro();
  const publicationPreviews = getPublicationPreviews();
  return {
    props: {
      intro,
      publicationPreviews
    },
  };
}
