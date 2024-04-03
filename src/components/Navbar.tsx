import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Socials from "./Socials";
import Link from "next/link";
import { useScrollPosition } from "~/hooks/useScrollPosition";

const Navbar = () => {
  const [openSideNav, setOpenSideNav] = useState<boolean>(false);
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={`fixed top-0 z-[500] flex h-16 w-full items-center justify-between bg-white px-5 transition-all duration-500 ease-in-out md:px-20 ${openSideNav && "shadow-md"} ${scrollPosition > 1 && "shadow-md"}`}
    >
      <Link href={"#"} className="font-category2 text-heading">
        Jacob Pixler
      </Link>
      <button
        onClick={() => setOpenSideNav(!openSideNav)}
        className="flex flex-col items-end gap-1 md:hidden"
      >
        <div
          className={`relative h-[2px] max-w-full bg-black transition-all ease-in-out ${openSideNav ? "top-[6px] w-6 rotate-[315deg]" : "w-5"}`}
        ></div>
        <div
          className={`relative h-[2px] max-w-full bg-black transition-all ease-in-out ${openSideNav ? "w-6 rotate-[225deg]" : "w-6"}`}
        ></div>
        <div
          className={`relative h-[2px] w-5 max-w-full bg-black transition-all ease-in-out ${openSideNav && "rotate-180 opacity-0"}`}
        ></div>
      </button>
      <div className="hidden md:block">
        <Socials openSideNav={openSideNav} />
      </div>
      <Sidebar openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
    </div>
  );
};

export default Navbar;
