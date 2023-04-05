import { WorkingSet } from "@/types/sets";
import PartialBulkyBorder from "../PartialBulkyBorder";
import SetHeding from "./SetHeading";

type Props = {
  set: WorkingSet;
};

export default function ActiveSet({ set }: Props) {
  const collection = set.collection || [];
  return (
    <div className="border-[1px] border-black p-3 flex flex-col items-center gap-[40px]">
      <img src={set.heroImg} />
      <SetHeding title={set.name} date={set.date} />
      <div
        className="markdown-content max-w-[659px]"
        dangerouslySetInnerHTML={{ __html: set.description || "" }}
      ></div>
      {collection.map((item) => (
        <div
          id="set-collection-items"
          key={item.index}
          className="relative border-black border-t-[1px] max-w-[659px]"
        >
          <PartialBulkyBorder
            total={collection.length}
            i={item.index}
            bottom={false}
          />
          <div>
            <a href={item.href}
              className="flex flex-row items-center gap-[10px] mt-[20px]">
              <span className="content-type text-xs text-white uppercase bg-black p-2 py-1">
                {item.contentType}
              </span>
              <h3 className="flex-grow uppercase font-bold tracking-widest">{item.title}</h3>
              <img src="/img/arrow-top-right.svg" className="link-arrow" />
            </a>
            <div className="text-xs my-4">
              {item.preposition + ":"}
              <span className="font-bold">{item.authors}</span>
            </div>
            <div
              className="markdown-content text-xs"
              dangerouslySetInnerHTML={{ __html: item.excerpt || "" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
