import PartialBulkyBorder from "@/components/PartialBulkyBorder";
import { LegalExplainerQuestion } from "@/types/legal";
import ConfidenceRange from "./ConfidenceRange";

type Props = {
  question: LegalExplainerQuestion;
};

export default function ConfidenceLevelSection({ question }: Props) {
  return (
    <div className="pb-6 flex flex-col items-stretch gap-[40px]">
      <div id="set-collection-items">
        {/^[12345]$/.test(question.confidenceLevel.trim()) ? (
          <div className="flex flex-row items-center gap-[10px] mt-2">
            <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
              CONFIDENCE LEVEL
            </span>
            <h3 className="flex-grow uppercase font-bold leading-tight tracking-widest">
              <ConfidenceRange value={question.confidenceLevel} />
            </h3>
          </div>
        ) : (
          <div className="flex flex-col gap-[10px] mt-2">
            <div className="flex flex-row items-center gap-[10px]">
              <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
                CONFIDENCE LEVEL (NON-BIPA)
              </span>
              <h3 className="flex-grow uppercase font-bold leading-tight tracking-widest">
                <ConfidenceRange
                  value={
                    question.confidenceLevel.split(";")[0].trim().split(" ")[0]
                  }
                />
              </h3>
            </div>
            <div className="flex flex-row items-center gap-[10px]">
              <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
                CONFIDENCE LEVEL (BIPA)
              </span>
              <h3 className="flex-grow uppercase font-bold leading-tight tracking-widest">
                <ConfidenceRange
                  value={
                    question.confidenceLevel.split(";")[1].trim().split(" ")[0]
                  }
                />
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
