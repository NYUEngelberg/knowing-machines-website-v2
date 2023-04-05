import { useState } from "react";

type Props = {
  navbarLinks: Record<string, string>;
};

export default function NavbarLinksMobile({ navbarLinks }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={
        "flex flex-col sm:hidden " +
        " space-x-6 mt-1 text-xs font-bold translate-y-[5px]" + 
        (isExpanded ?
          " z-[50] absolute right-0 bg-white border-black border-b-[3px] pb-2" :
          "")
      }
    >
      <img onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer self-end pr-3" src="/img/hamburger.png" />
      {isExpanded && Object.entries(navbarLinks).map(([text, href]) => (
        <a href={href} key={href} className="px-3 pt-3 ">
          {text}
        </a>
      ))}
    </div>
  );
  // return (
  //   <div
  //     className={
  //       " md:hidden px-6 py-5 gap-4" +
  //       (isExpanded ? " z-[50] absolute" : "")
  //     }
  //   >
  //     <img onClick={() => setIsExpanded(!isExpanded)}
  //       className="cursor-pointer self-start" src="/img/hamburger.png" />
  //     {isExpanded && <NavbarLinks />}
  //   </div>
  // );
}
