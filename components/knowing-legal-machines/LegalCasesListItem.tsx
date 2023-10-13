import { LegalCase } from "@/types/legal";

type Props = {
  item: LegalCase;
};

export default function LegalCasesListItem({ item }: Props) {
  return (
    <div
      key={item.title}
      className="mb-4 flex flex-col items-stretch"
    >
      <div
        id="set-collection-items"
        className="relative border-black border-[1px] relative"
      >
        <div>
          <a
            href={
              "/knowing-legal-machines/legal-explainer/cases/" + item.slug
            }
            className="flex flex-row items-center gap-[10px]"
          >
            <img src={item.coverImg} alt={item.coverImgAlt} className="max-w-[140px]"/>
            <h3 className="flex-grow uppercase font-bold leading-tight tracking-widest">
              {item.title}
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}
