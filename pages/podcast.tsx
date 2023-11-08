import HomePageHeading from "@/components/HomePageHeading";
import Layout from "@/components/Layout";
import { MetaOgTagData } from "@/types/meta";

type Props = {};

export default function PodcastPage({}: Props) {
  const metaOgTagData: MetaOgTagData = {
    title: "Knowing Machines - Podcast",
    description:
      "Knowing Machines is a research project tracing the histories, practices, and politics of how machine learning systems are trained to interpret the world.",
    url: "https://knowingmachines.org/podcast",
    imageUrl: "https://knowingmachines.org/img/field_guide_black_1.png",
    imageAlt: "a geometric pattern of boxes evoking a spreadsheet",
  };
  return (
    <Layout metaOgTagData={metaOgTagData}>
      <main
        className={
          "max-w-[900px] mx-auto my-12" +
          " md:grid " +
          " md:grid-cols-[minmax(0,1fr)] md:gap-[40px]"
        }
      >
        <section className="text-sm px-4 md:pl-0">
          <HomePageHeading text={"Podcast"} />
          <div className={"pb-10 md:p-10 relative"}>
            <div className="absolute top-0 left-0 w-[1px] h-[333px] bg-black"></div>
            <div className="flex flex-col gap-6 sm:m-0 mx-8 ">
              <div className="text-sm markdown-content mt-8 sm:mt-0">The Knowing Machines podcast is hosted by Tamar Avishai, and explains how we train AI systems to interpret the world. If you want to go deeper on understanding generative AI, this limited series podcast answers what it is, how we got here, why it matters, and how it might impact our lives. The Knowing Machines podcast has themed episodes featuring groundbreaking research on the social, legal, cultural, environmental, and political impacts of these new systems at a pivotal time. <br></br> <br></br>
              
              You can listen to individual episodes below, or click 'subscribe' in the player for options to subscribe to the entire season.</div>
              <iframe
                className="border-black border-[1px]"
                height="200px"
                width="100%"
                frameBorder={"0"}
                scrolling="no"
                seamless
                src="https://player.simplecast.com/90a7d53e-86d4-46ec-8029-cb85691aed40?dark=false"
              ></iframe>
              <iframe
                className="border-black border-[1px]"
                height="200px"
                width="100%"
                frameBorder={"0"}
                scrolling="no"
                seamless
                src="https://player.simplecast.com/265b9a8a-d0c3-4d50-a239-af1dc0f2b67d?dark=false"
              ></iframe>
              <iframe
                className="border-black border-[1px]"
                height="200px"
                width="100%"
                frameBorder={"0"}
                scrolling="no"
                seamless
                src="https://player.simplecast.com/b5e36c36-cec2-45e1-bcc8-69a98d34f32b?dark=false"
              ></iframe>
              
              
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
