import Layout from "@/components/Layout";
import { getHomePageIntro } from "@/util/homePageContent";
import { getActiveSet, getSets } from "@/util/setsContent";
import { WorkingSet } from "@/types/sets";
import UpcomingSets from "@/components/sets/UpcomingSets";
import HomePageHeading from "@/components/HomePageHeading";
import ActiveSet from "@/components/sets/ActiveSet";
import NewsletterFormEmbed from "@/components/NewsletterFormEmbed";
import PublicationsSection from "@/components/PublicationsSection";
import { PublicationMetaData } from "@/types/publications";
import { getPublicationPreviews } from "@/util/publications";

type Props = {
  intro: string;
  sets: WorkingSet[];
  activeSet: WorkingSet;
  publicationPreviews: PublicationMetaData[]
};

export default function ResearchPage({ intro, sets, activeSet, publicationPreviews }: Props) {
  return (
    <Layout title={"Knowing Machines"} navbarDefaultCollapsed={true}>
      <main
        className={
          "max-w-[1080px] mx-auto py-0" +
          " md:grid " +
          " md:grid-cols-[minmax(0,1fr)] md:gap-[40px]"
        }
      >
        <PublicationsSection
            isResearchPage={true}
            publicationPreviews={publicationPreviews}/>
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
  const sets = getSets();
  const activeSet = await getActiveSet();
  const publicationPreviews = getPublicationPreviews();
  return {
    props: {
      intro,
      sets,
      activeSet,
      publicationPreviews
    },
  };
}
