import TeamSection from "@/components/about/TeamSection";
import Layout from "@/components/Layout";
import SideNav from "@/components/SideNav";
import { TeamMember, TeamType } from "@/types/about";
import { MetaOgTagData } from "@/types/meta";
import {
  getAboutsPageIntro,
  getContactSection,
  getTeam,
} from "@/util/aboutContent";

type Props = {
  intro: string;
  team: TeamMember[];
  alumni: TeamMember[];
  contact: string;
};

export default function About({ intro, contact, team, alumni }: Props) {
  const metaOgTagData:MetaOgTagData = {
    title: "Knowing Machines — About",
    description: "Knowing Machines is a research project tracing the histories, practices, and politics of how machine learning systems are trained to interpret the world.",
    url: "https://knowingmachines.org/about",
    imageUrl: "https://knowingmachines.org/img/field_guide_black_1.png",
    imageAlt: "a geometric pattern of boxes evoking a spreadsheet",
  };
  const sectionLinks = [
    {
      text: "TEAM",
      href: "TEAM",
    },
    {
      text: "ALUMNI",
      href: "ALUMNI",
    },
    {
      text: "CONTACT",
      href: "CONTACT",
    },
  ];
  return (
    <Layout metaOgTagData={metaOgTagData}>
      <main
        className={
          " max-w-[1175px] mx-auto py-12 " +
          " md:grid md:grid-rows-[1fr] md:grid-cols-[288px_minmax(0,1fr)] md:gap-[50px]"
        }
      >
        <SideNav title={"Knowing Machines"} links={sectionLinks} />
        <div>
          <section
            className="markdown-content border-[1px] border-black mx-4 p-8"
            dangerouslySetInnerHTML={{ __html: intro }}
          />
          <TeamSection sectionTitle="TEAM" team={team} />
          <TeamSection sectionTitle="ALUMNI" team={alumni} />
          <section
            id="CONTACT"
            className="markdown-content border-[1px] md:border-t-0 border-black mx-4 mt-16 md:mt-0 p-8"
            dangerouslySetInnerHTML={{ __html: contact }}
          />
        </div>
      </main>
      <></>
    </Layout>
  );
}

export async function getStaticProps() {
  const intro = await getAboutsPageIntro();
  const contact = await getContactSection();
  const team = await getTeam(TeamType.Current);
  const alumni = await getTeam(TeamType.Alumni);
  return {
    props: {
      intro,
      contact,
      team,
      alumni,
    },
  };
}
