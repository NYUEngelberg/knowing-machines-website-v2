import TeamSection from "@/components/about/TeamSection";
import Layout from "@/components/Layout";
import SideNav from "@/components/SideNav";
import { TeamMember, TeamType } from "@/types/about";
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
  const title = "Knowing Machines";
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
    <Layout title={title}>
      <main
        className={
          " max-w-[1175px] mx-auto py-12 " +
          " md:grid md:grid-rows-[1fr] md:grid-cols-[288px_minmax(0,1fr)] md:gap-[50px]"
        }
      >
        <SideNav title={title} links={sectionLinks} />
        <div>
          <section
            className="markdown-content border-[1px] border-black mx-4 p-8"
            dangerouslySetInnerHTML={{ __html: intro }}
          />
          <TeamSection sectionTitle="TEAM" team={team} />
          <TeamSection sectionTitle="ALUMNI" team={alumni} />
          <section
            id="CONTACT"
            className="markdown-content border-[1px] border-black mx-4 mt-16 p-8"
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
