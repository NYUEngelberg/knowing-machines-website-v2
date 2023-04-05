import { WorkingSet } from "@/types/sets";
import SetHeding from "./SetHeading";

type Props = {
  set: WorkingSet;
};

export default function UpcomingSet({ set }: Props) {
  return (
    <div className="border-[1px] border-black p-3 md:min-h-[593px] flex flex-col gap-[40px] items-center">
      <img className="min-h-[256px]" src={set.heroImg} />
      <SetHeding title={set.name} date={set.date} />
      <div className="text-xs max-w-[448px]">{set.blurb}</div>
    </div>
  );
}
