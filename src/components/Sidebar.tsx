import Link from "next/link";
import React from "react";
import type { Dispatch, SetStateAction } from "react";
import Socials from "./Socials";

interface Props {
  openSideNav: boolean;
  setOpenSideNav: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ openSideNav, setOpenSideNav }: Props) => {
  return (
    <div
      className={`fixed -right-full top-16 z-[999] h-[100vh] w-32 bg-black p-5 py-20 text-white transition-all ease-in-out ${openSideNav && "right-0 [filter:_drop-shadow(-1px_5px_6px_#0000005d)]"}`}
    >
      {/* <div className="font-mono">
        <p>how can i help you today?</p>
        <ul>
          <li className="group">
            <span className={`mr-2 opacity-0 group-focus:`}>&gt;</span>
            <Link href={"#"} className="m-auto">
              resume
            </Link>
          </li>
        </ul>
      </div> */}
      <div className="h-full">
        <Link
          href={"#"}
          className="m-auto flex text-center font-mono tracking-[5px] [text-orientation:_upright] [writing-mode:__vertical-rl]"
        >
          resume
        </Link>
        <div className="my-20 h-[1px] bg-gray-500"></div>
        <Socials openSideNav={openSideNav} className="invert" />
      </div>
    </div>
  );
};

export default Sidebar;
