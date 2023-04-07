import { Link } from "@/types";
import PartialBulkyBorder from "./PartialBulkyBorder";
import SubmitSuggestion from "./SubmitSuggestion";

type Props = {
  title: string;
  links: Link[];
  submitSuggestion?: boolean;
};

export default function SideNav({
  title,
  links,
  submitSuggestion = false,
}: Props) {
  return (
    <aside className="mx-4 mb-12 ">
      <div className="md:sticky md:top-16">
        <div className="border-b-[3px] border-black p-2 px-4 leading-4 uppercase font-bold leading-[123%] text-lg">
          {title}
        </div>
        {links.map((link, i) => (
          <div key={link.href} className="h-[61px] flex relative">
            <a
              className={
                "grow leading-[123%] text-sm p-2 pl-4 flex justify-between items-center " +
                " border-l-[3px] border-b-[1px] border-black hover:bg-[#1400FF] hover:text-white"
              }
              href={"#" + link.href}
            >
              <span className="link-text-abc">{link.text}</span>
              <img
                className="link-arrow h-[12px] pl-2"
                src="/img/arrow-bottom-right.svg"
              />
            </a>
            <PartialBulkyBorder total={links.length} i={i} />
          </div>
        ))}
        {submitSuggestion && <SubmitSuggestion />}
      </div>
    </aside>
  );
}
