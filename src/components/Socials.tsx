import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getSocials } from "~/api";
import { useState } from "react";

interface Props {
  className?: string;
  openSideNav?: boolean;
}

const Socials = ({ className, openSideNav }: Props) => {
  const { data: socials } = useQuery({
    queryKey: ["socials"],
    queryFn: getSocials,
  });

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const linkedLogos = socials?.map((social) => {
    return (
      <Link key={social.title} href={social.link || ""} target="_blank">
        <Image
          width={30}
          height={30}
          alt={social.title}
          src={`/images/socials/${social.title}.svg`}
          className={`transition-all ease-in-out hover:translate-y-1 ${className ? className : ""}`}
          // style={{ filter: hoveredLink === social.title ? "" : "blur(8px)" }}
          onMouseEnter={() => setHoveredLink(social.title)}
          onMouseLeave={() => setHoveredLink(null)}
        />
      </Link>
    );
  });

  return (
    <div
      className={`flex flex-col items-center justify-center gap-14 md:flex-row md:gap-5`}
    >
      {linkedLogos}
    </div>
  );
};

export default Socials;
