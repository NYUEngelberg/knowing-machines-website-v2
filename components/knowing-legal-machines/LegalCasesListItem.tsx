import { LegalCase } from "@/types/legal";

type Props = {
  item: LegalCase;
};

export default function LegalCasesListItem({ item }: Props) {
  return (
    <div
      key={item.title}
      className="pb-6 flex flex-col items-stretch gap-[40px]"
    >
      <div
        id="set-collection-items"
        className="relative border-black border-t-[1px] relative"
      >
        <div>
          <a
            href={
              "/knowing-legal-machines/legal-explainer/cases/" + item.slug
            }
            className="flex flex-row items-center gap-[10px] mt-8"
          >
            <h3 className="flex-grow uppercase font-bold leading-tight tracking-widest">
              {item.title}
            </h3>
            <img src="/img/arrow-top-right.svg" className="link-arrow-magic" />
          </a>
        </div>
      </div>
    </div>
  );
}
