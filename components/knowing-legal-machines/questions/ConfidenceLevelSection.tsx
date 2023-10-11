import PartialBulkyBorder from "@/components/PartialBulkyBorder"
import { LegalExplainerQuestion } from "@/types/legal"

type Props = {
    question: LegalExplainerQuestion
}

export default function ConfidenceLevelSection ({question}: Props) {
    return <div
    className="pb-6 flex flex-col items-stretch gap-[40px]"
  >
    <div
      id="set-collection-items"
    >
        <PartialBulkyBorder
          total={5}
          i={3}
          bottom={false}
        />
      <div
          className="flex flex-row items-center gap-[10px] mt-2"
        >
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            CONFIDENCE LEVEL
          </span>
          <h3 className="flex-grow uppercase font-bold leading-tight tracking-widest">
            {question.confidenceLevel}
          </h3>
      </div>
    </div>
  </div>
}