import Link from "next/link";
import React from "react";
import Socials from "./Socials";

interface Props {
  openSideNav: boolean;
  resumeUrl?: string;
}

const Sidebar = ({ openSideNav, resumeUrl }: Props) => {
  return (
    <div
      className={`fixed -right-full top-16 z-50 h-[60vh] max-h-[400px] w-32 bg-black p-5 py-5 text-white transition-all ease-in-out ${openSideNav && "right-0 [filter:_drop-shadow(-1px_5px_6px_#0000005d)]"}`}
    >
      <div className="h-full">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={`${resumeUrl}`}
          className="m-auto flex text-center font-mono tracking-[5px] [text-orientation:_upright] [writing-mode:__vertical-rl]"
        >
          resumé
        </Link>
        <div className="my-5 h-[1px] bg-gray-500"></div>
        <Socials openSideNav={openSideNav} className="invert" />
      </div>
    </div>
  );
};

export default Sidebar;
