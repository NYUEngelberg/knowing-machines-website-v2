import { LegalCase } from "@/types/legal";

type Props = {
  item: LegalCase;
  isFirstItem: boolean;
};

export default function RelatedCasesListItem({ item, isFirstItem }: Props) {
  return (
    <>
      {!isFirstItem && <span> | </span>}
      <a
        href={"/knowing-legal-machines/legal-explainer/cases/" + item.slug}
        className=""
      >
        <span className="flex-grow uppercase font-bold leading-tight tracking-widest">
          {item.title}
        </span>
      </a>
    </>
  );
}
