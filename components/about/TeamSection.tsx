import { TeamMember } from "@/types/about";
import TeamMemberCard from "./TeamMemberCard";

type Props = {
  team: TeamMember[];
  sectionTitle: string;
};

export default function TeamSection({ sectionTitle, team }: Props) {
  return (
    <section id={sectionTitle.toUpperCase()}
        className="flex flex-col gap-[24px] md:border-[1px] border-black mx-4 pt-16 md:p-8">
      <span className="font-bold text-lg">{sectionTitle}</span>
      {team.map((r) => (
        <TeamMemberCard key={r.imgSrc} teamMember={r} />
      ))}
    </section>
  );
}
