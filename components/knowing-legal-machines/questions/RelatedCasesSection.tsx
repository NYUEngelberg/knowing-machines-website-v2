import PartialBulkyBorder from "@/components/PartialBulkyBorder"
import { LegalCase, LegalExplainerQuestion } from "@/types/legal"

type Props = {
    legalCases: LegalCase[]
}

export default function RelatedCasesSection ({legalCases}: Props) {
    return <div
    className="pb-6 flex flex-col items-stretch gap-[40px]"
  >
    <div
      id="set-collection-items"
      className="relative border-black border-t-[1px] relative"
    >
        <PartialBulkyBorder
          total={5}
          i={3}
          bottom={false}
        />
      <div
          className="flex flex-row items-center gap-[10px] mt-8"
        >
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            RELATED CASES
          </span>
          <h3 className="flex-grow uppercase font-bold leading-tight tracking-widest">
            {legalCases.map(r => r.citations.join("; ")).join(" | ")}
          </h3>
      </div>
    </div>
  </div>
}