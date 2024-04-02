import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="container ml-auto mr-auto w-[90%] max-w-[800px] md:w-[80%]">
      <div className="mb-10 mt-10 h-1 w-full bg-black"></div>
      <div>
        <Link href="#" className="text-category font-category2">
          <Image
            width={40}
            height={40}
            alt="projects"
            src={"/images/projects.svg"}
            className="mr-5 inline w-[clamp(55px,_39.3478px_+_4.8913vi,_100px)]"
          />
          <span>Projects</span>
        </Link>
      </div>
      <div>
        <Link href="#" className="text-category font-category2">
          <Image
            width={40}
            height={40}
            alt="projects"
            src={"/images/contact.svg"}
            className="mr-5 inline w-[clamp(55px,_39.3478px_+_4.8913vi,_100px)]"
          />
          <span className="">Contact</span>
        </Link>
      </div>
      <div>
        <Link href="#" className="text-category font-category2">
          <Image
            width={40}
            height={40}
            alt="projects"
            src={"/images/about.svg"}
            className="mr-5 inline w-[clamp(55px,_39.3478px_+_4.8913vi,_100px)]"
          />
          <span className="">About</span>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
