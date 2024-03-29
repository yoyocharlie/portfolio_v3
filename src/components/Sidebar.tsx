import React from "react";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  openSideNav: boolean;
  setOpenSideNav: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ openSideNav, setOpenSideNav }: Props) => {
  return (
    <div
      className={`fixed -right-full bottom-0 top-16 z-[999] w-56 bg-black p-5 shadow-md transition-all ease-in-out ${openSideNav && "right-0"}`}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
