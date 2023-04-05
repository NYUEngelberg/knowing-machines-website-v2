import { WorkingSet } from "@/types/sets";
import HomePageHeading from "../HomePageHeading";
import PartialBulkyBorder from "../PartialBulkyBorder";
import UpcomingSet from "./UpcomingSet";

type Props = {
  sets: WorkingSet[];
};

export default function UpcomingSets({ sets }: Props) {
  return (
    <section className={"min-w-full "}>
      <HomePageHeading text={"UPCOMING SETS"} />
      <div className={" md:grid p-12 relative" + " md:grid-cols-2 md:gap-3"}>
        <div className="absolute top-0 left-0 w-[1px] h-[333px] bg-black"></div>
        {sets.map((set, i) => (
          <article className="relative" key={set.name}>
            <PartialBulkyBorder total={sets.length} i={i} bottom={false} />
            <UpcomingSet set={set} />
          </article>
        ))}
      </div>
    </section>
  );
}
