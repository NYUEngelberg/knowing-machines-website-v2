import PartialBulkyBorder from "@/components/PartialBulkyBorder"
import { LegalCase, LegalExplainerQuestion } from "@/types/legal"
import LegalCasesListItem from "../LegalCasesListItem"
import RelatedCasesListItem from "../cases/RelatedCasesListItem"

type Props = {
    legalCases: LegalCase[]
}

export default function RelatedCasesSection ({legalCases}: Props) {
    return <div
    className="pb-6 flex flex-col items-stretch gap-[40px]"
  >
    <div
      id="set-collection-items"
    
    >
      <div
          className="flex flex-row items-center gap-[10px] mt-2"
        >
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            RELATED CASES
          </span>
          <span className="flex-grow uppercase leading-tight text-sm ">
            
            {(legalCases || [])
          .sort((a, b) => a.index - b.index)
          .map((item, i) => (
            <RelatedCasesListItem isFirstItem={i === 0} item={item} key={item.slug} />
          ))}
          </span>
      </div>
    </div>
  </div>
}