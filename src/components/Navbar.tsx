import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [openSideNav, setOpenSideNav] = useState<boolean>(false);
  return (
    <div
      className={`flex h-16 items-center justify-between px-5 transition-all duration-500 ease-in-out ${openSideNav && "shadow-sm"}`}
    >
      <span className="text-heading">Jacob Pixler</span>
      <button
        onClick={() => setOpenSideNav(!openSideNav)}
        className="flex w-10 flex-col items-end gap-1"
      >
        <div
          className={`relative h-[2px] max-w-full bg-black transition-all ease-in-out ${openSideNav ? "top-[6px] w-5 rotate-[315deg]" : "w-4"}`}
        ></div>
        <div
          className={`relative h-[2px] max-w-full bg-black transition-all ease-in-out ${openSideNav ? "w-5 rotate-[225deg]" : "w-5"}`}
        ></div>
        <div
          className={`h-[2px] w-4 max-w-full bg-black transition-all ease-in-out ${openSideNav && "rotate-180 opacity-0"}`}
        ></div>
      </button>
      <Sidebar openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
    </div>
  );
};

export default Navbar;
