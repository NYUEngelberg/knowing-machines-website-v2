import { useState, useCallback, useEffect } from "react";
import NavbarLinksDesktop from "./NavbarLinksDesktop";
import NavbarLinksMobile from "./NavbarLinksMobile";

type Props = {
  defaultCollapsed: boolean;
};

export default function Navbar({ defaultCollapsed }: Props) {
  const showNavbarAtOffset = 140;
  const [open, setIsOpen] = useState(!defaultCollapsed);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY);
      setIsOpen(!defaultCollapsed && window.scrollY === 0);
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [defaultCollapsed]);

  const onMouseEnter = useCallback(() => setIsOpen(true), []);
  const onMouseLeave = useCallback(
    () => setIsOpen(!defaultCollapsed || offset >= 140),
    [defaultCollapsed, offset]
  );
  const navbarLinks = {
    about: "/about",
    "reading list": "/reading-list",
  };

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all ease-in-out duration-500 " +
        (defaultCollapsed && offset < showNavbarAtOffset && !open
          ? "translate-y-[-49px] "
          : "") +
        " text-black"
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={
          " max-w-[1175px] mx-auto " +
          " flex justify-between uppercase bg-white"
        }
      >
        <div>
          <a href="/" className="mt-4 block">
            <img className="h-[36px] -mb-[3px]" src="/img/logo_small.svg" />
          </a>
        </div>
        <NavbarLinksDesktop navbarLinks={navbarLinks} />
        <NavbarLinksMobile navbarLinks={navbarLinks} />
      </div>
      <div className="h-[3px] bg-black"></div>
      {defaultCollapsed && offset < showNavbarAtOffset && (
        <div className="h-[25px] bg-transparent"></div>
      )}
    </nav>
  );
}
