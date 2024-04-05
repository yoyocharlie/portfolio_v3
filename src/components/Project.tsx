import Image from "next/image";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSwipeable } from "react-swipeable";
import { TypeAnimation } from "react-type-animation";
import { cursor_class } from "./Terminal";
import type { Project } from "~/types";

interface Props {
  project: Project;
}

const Project = ({ project }: Props) => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0,
  });
  const { ref: terminalRef, inView: terminalInView } = useInView({
    threshold: 0,
  });

  const tech = project?.techSvgs?.techSvgs.map((svg) => {
    return (
      <span
        className="tooltip tooltip-bottom max-w-8 shrink-0"
        data-tip={svg.imageTitle}
        key={svg.url}
      >
        <Image
          src={svg.url}
          alt={svg.imageTitle}
          height={200}
          width={200}
          className="w-full"
        />
      </span>
    );
  });

  return (
    <div
      ref={sectionRef}
      className={`${sectionInView && "animate-fade-up"} mb-16 mt-10`}
    >
      <h3 className="text-heading">{project.title}</h3>
      <div className="md:flex md:gap-5">
        <Carousel projectTitle={project.title} urls={project.imgUrls} />
        <div
          ref={terminalRef}
          className="flex grow flex-col gap-10 font-jp font-light md:basis-[16%] md:justify-between"
        >
          <div
            className={`order-1 h-44 rounded-md px-2 pt-1 md:h-60 md:bg-black md:font-mono md:text-sm md:text-white ${terminalInView && "animate-fade-up"}`}
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
          <div
            className={`order-2 flex gap-2 ${terminalInView && "animate-flip-up"}`}
          >
            {tech}
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
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const hashString = window.location.hash.substring(1);
      let slideNumber = parseInt(hashString.replace(/\D/g, ""), 10);
      if (!slideNumber) {
        slideNumber = 0;
      }
      window.location.hash = `#${projectTitle}slide${slideNumber === urls.length - 1 ? 0 : slideNumber + 1}`;
    },
    onSwipedRight: () => {
      const hashString = window.location.hash.substring(1);
      let slideNumber = parseInt(hashString.replace(/\D/g, ""), 10);
      if (!slideNumber) {
        slideNumber = 0;
      }
      window.location.hash = `#${projectTitle}slide${slideNumber === 0 ? urls.length - 1 : slideNumber - 1}`;
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
          >
            ❮
          </a>
          <a
            href={`#${projectTitle}slide${i === urls.length - 1 ? 0 : i + 1}`}
            className="btn btn-circle border-none bg-black text-white hover:bg-white hover:text-black"
          >
            ❯
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="md:basis-[60%]">
      <div className="carousel w-full">{images}</div>
    </div>
  );
};
