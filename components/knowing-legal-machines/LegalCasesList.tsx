import { LegalCase } from "@/types/legal";
import LegalCasesListItem from "./LegalCasesListItem";

type Props = {
  legalCases: LegalCase[];
  skipSlugs?: string[];
};

export default function LegalCasesList({ legalCases, skipSlugs = [] }: Props) {
  return (
    <div className="my-12">
      <div className="relative max-w-3xl">
        <div className="absolute top-[-25px] left-0">
          <span className="content-type text-xs text-white uppercase bg-black p-2 py-1 self-start">
            {"CASES"}
          </span>
        </div>
      </div>
      <div className="max-w-3xl">
        {(legalCases || [])
          .sort((a, b) => a.index - b.index)
          .map((item) => (
            <LegalCasesListItem item={item} />
          ))}
      </div>
    </div>
  );
}