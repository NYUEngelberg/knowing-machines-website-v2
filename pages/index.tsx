import Layout from "@/components/Layout";
import { getHomePageIntro } from "@/util/homePageContent";
import { getActiveSet, getSets } from "@/util/setsContent";
import { WorkingSet } from "@/types/sets";
import UpcomingSets from "@/components/sets/UpcomingSets";
import HomePageHeading from "@/components/HomePageHeading";
import ActiveSet from "@/components/sets/ActiveSet";
import NewsletterFormEmbed from "@/components/NewsletterFormEmbed";
import PublicationsSection from "@/components/PublicationsSection";

type Props = {
  intro: string;
  sets: WorkingSet[];
  activeSet: WorkingSet;
};

export default function Home({ intro, sets, activeSet }: Props) {
  return (
    <Layout title={"Knowing Machines"} navbarDefaultCollapsed={true}>
      <main
        className={
          "max-w-[1175px] mx-auto py-10" +
          " md:grid " +
          " md:grid-cols-[300px_minmax(0,1fr)] md:gap-[40px]"
        }
      >
        <aside className="mb-10">
          <div className="md:sticky md:top-12">
            <div className="">
              <img src="/img/logo_main.svg" />
            </div>
            <div className="p-6 border border-black mt-10">
              <div
                className="markdown-content text-sm"
                dangerouslySetInnerHTML={{ __html: intro }}
              />
              <a href="/about"
                className="uppercase font-bold flex flex-row gap-[20px] items-center">
                <span>Read more</span>
                <img src="/img/right-arrow.png"
                  className="link-arrow"/>
              </a>
            </div>
          </div>
        </aside>
        <PublicationsSection />
      </main>

      {/* <main className={"max-w-[1175px] mx-auto py-12 "}>
        <UpcomingSets sets={sets} />
      </main> */}
      <main className="py-12">
        <NewsletterFormEmbed />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const intro = await getHomePageIntro();
  const sets = getSets();
  const activeSet = await getActiveSet();
  return {
    props: {
      intro,
      sets,
      activeSet,
    },
  };
}
