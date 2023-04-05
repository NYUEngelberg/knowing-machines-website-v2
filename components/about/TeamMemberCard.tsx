import { TeamMember } from "@/types/about";

type Props = {
  teamMember: TeamMember;
};

export default function TeamMemberCard({ teamMember }: Props) {
  const name = (
    teamMember.bio.match(/\<strong\>(.+)\<\/strong\>/) as RegExpMatchArray
  )[1];
  return (
    <article className="border-[1px] border-black">
      <div className="flex flex-row flex-wrap items-center">
        <img className="max-w-full sm:max-w-[200px]" src={teamMember.imgSrc} />
        <span className="font-bold text-lg uppercase p-8">{name}</span>
      </div>
      <div className="border-t-[1px] border-black p-6" dangerouslySetInnerHTML={{ __html: teamMember.bio }} />
    </article>
  );
}
