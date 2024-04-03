import Image from "next/image";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSwipeable } from "react-swipeable";
import { TypeAnimation } from "react-type-animation";
import { Project } from "~/types";
import { cursor_class } from "./Terminal";

interface Props {
  project: Project;
}

const Project = ({ project }: Props) => {
  const [open, setOpen] = useState(false);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={sectionRef}
      className={`${sectionInView && "animate-fade-up"} mb-10`}
    >
      <h3 className="text-heading">{project.title}</h3>
      <div>
        <Carousel projectTitle={project.title} urls={project.imgUrls} />
        <div className="mt-4 flex flex-col gap-10 font-jp font-light md:flex-row md:justify-between">
          <div className="order-2 md:order-1 md:basis-[48%]"></div>
          <div
            className={`order-1 h-80 rounded-md bg-black px-2 font-mono text-white md:order-2 md:basis-[48%]`}
          >
            <TypeAnimation
              sequence={[
                1000,
                `This is ${project.title}.`,
                500,
                (el) => el?.classList.remove(cursor_class),
              ]}
              wrapper="p"
              speed={60}
              repeat={0}
              cursor={false}
              className={`${cursor_class} mb-2`}
            />
            <TypeAnimation
              sequence={[
                3000,
                (el) => el?.classList.add(cursor_class),
                `${project.description}`,
              ]}
              wrapper="p"
              speed={65}
              repeat={0}
              cursor={false}
            />
          </div>
        </div>
      </div>
      <style global jsx>{`
        .custom-type-animation-cursor::after {
          content: "|";
          animation: cursor 1.1s infinite step-start;
        }
        @keyframes cursor {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Project;

interface CarouselProps {
  projectTitle: string;
  urls: string[];
}

const Carousel = ({ projectTitle, urls }: CarouselProps) => {
  const [activeHash, setActiveHash] = useState(`#${projectTitle}slide0`);
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const hashString = window.location.hash.substring(1);
      let slideNumber = parseInt(hashString.replace(/\D/g, ""), 10);
      if (!slideNumber) {
        slideNumber = 0;
      }
      window.location.hash = `#${projectTitle}slide${slideNumber === urls.length - 1 ? 0 : slideNumber + 1}`;
      setActiveHash(
        `#${projectTitle}slide${slideNumber === urls.length - 1 ? 0 : slideNumber + 1}`,
      );
    },
    onSwipedRight: () => {
      const hashString = window.location.hash.substring(1);
      let slideNumber = parseInt(hashString.replace(/\D/g, ""), 10);
      if (!slideNumber) {
        slideNumber = 0;
      }
      window.location.hash = `#${projectTitle}slide${slideNumber === 0 ? urls.length - 1 : slideNumber - 1}`;
      setActiveHash(
        `#${projectTitle}slide${slideNumber === 0 ? urls.length - 1 : slideNumber - 1}`,
      );
    },
    trackMouse: true,
  });

  const images = urls.map((url, i) => {
    return (
      <div
        id={`${projectTitle}slide${i}`}
        className="carousel-item w-full md:relative"
        key={url}
        {...handlers}
      >
        <Image
          className="w-full rounded-md border"
          src={url}
          width={1920}
          height={1080}
          alt={projectTitle}
        />
        <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between md:flex">
          <a
            href={`#${projectTitle}slide${i === 0 ? urls.length - 1 : i - 1}`}
            className="btn btn-circle border-none bg-black text-white hover:bg-white hover:text-black"
            onClick={() =>
              setActiveHash(
                `#${projectTitle}slide${i === 0 ? urls.length - 1 : i - 1}`,
              )
            }
          >
            ❮
          </a>
          <a
            href={`#${projectTitle}slide${i === urls.length - 1 ? 0 : i + 1}`}
            className="btn btn-circle border-none bg-black text-white hover:bg-white hover:text-black"
            onClick={() =>
              setActiveHash(
                `#${projectTitle}slide${i === urls.length - 1 ? 0 : i + 1}`,
              )
            }
          >
            ❯
          </a>
        </div>
      </div>
    );
  });

  const dots = urls.map((url, i) => {
    return (
      <a
        href={`#${projectTitle}slide${i}`}
        key={`dotFor${url}`}
        className={`h-2 w-2 rounded-full border-2 border-black transition-all ease-in-out ${activeHash === `#${projectTitle}slide${i}` ? "bg-black" : "bg-white"}`}
        onClick={() => setActiveHash(`#${projectTitle}slide${i}`)}
      ></a>
    );
  });

  return (
    <div>
      <div className="carousel w-full">{images}</div>
      <div className="flex justify-center gap-3">{dots}</div>
    </div>
  );
};
