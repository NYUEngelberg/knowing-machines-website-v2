type Props = {
  navbarLinks: Record<string, string>;
};

export default function NavbarLinksDesktop({ navbarLinks }: Props) {
  return (
    <div className={"hidden sm:flex " +
        " space-x-6 mt-3 text-xs font-bold"}>
      {Object.entries(navbarLinks).map(([text, href]) => (
        <a href={href} key={href} className="px-3 pt-3 ">
          {text}
        </a>
      ))}
    </div>
  );
}
