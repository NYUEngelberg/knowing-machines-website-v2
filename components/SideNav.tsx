import { Link } from "@/types";
import PartialBulkyBorder from "./PartialBulkyBorder";
import SubmitSuggestion from "./SubmitSuggestion";

type Props = {
  title: string;
  links: Link[];
};

export default function SideNav({ title, links }: Props) {
  return (
    <aside className="mx-4 mb-12 ">
      <div className="md:sticky md:top-8">
        <div className="border-b-[3px] border-black p-2 px-4 leading-4 uppercase font-bold leading-[123%] text-lg">
          {title}
        </div>
        {links.map((link, i) => (
          <div
            key={link.href}
            className="h-[61px] flex relative"
          >
            <a
              className={"grow leading-[123%] text-sm p-2 pl-4 flex justify-between items-center " +
                " border-l-[3px] border-b-[1px] border-black hover:border-l-[#1400FF] "}
              href={"#" + link.href}
            >
              <span>{link.text}</span>
              <img className="link-arrow h-[12px] pl-2" src="/img/arrow-bottom-right.svg" />
            </a>
            <PartialBulkyBorder total={links.length} i={i} />
          </div>
        ))}
        <SubmitSuggestion />
      </div>
    </aside>
  );
}
