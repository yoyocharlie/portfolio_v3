import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useSwipeable } from "react-swipeable";
import type { Project } from "~/types";
import { External } from "./icons/External";
import { GitHub } from "./icons/GitHub";
import { useState } from "react";

interface Props {
  project: Project;
}

const Project = ({ project }: Props) => {
  const { ref: projectRef, inView: projectInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: terminalRef, inView: terminalInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const tech = project?.tech.map((name) => {
    return (
      <li key={name}>
        <span className="text-yellow-200">{">"}</span> {name}
      </li>
    );
  });

  return (
    <div
      ref={projectRef}
      className={`${projectInView ? "animate-fade-up" : ""} mb-16 mt-10`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-heading">{project.title}</h3>
        <ul className="flex gap-5">
          {project.repo && (
            <li>
              <Link target="_blank" href={project.repo}>
                <GitHub />
              </Link>
            </li>
          )}
          {project.siteLink && (
            <li>
              <Link target="_blank" href={project.siteLink}>
                <External />
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="md:flex md:gap-5">
        {project.imageUrls?.length > 0 && (
          <>
            <MobileCarousel
              projectTitle={project.title}
              urls={project.imageUrls}
            />
            <DesktopCarousel
              projectTitle={project.title}
              urls={project.imageUrls}
            />
          </>
        )}
        <div
          ref={terminalRef}
          className={`grow font-sans text-body md:font-light ${!project.imageUrls ? "w-full" : "md:basis-[16%]"} `}
        >
          <div
            className={`${!project.imageUrls ? "md:basis-[60%]" : ""} order-1 h-full space-y-3 overflow-auto rounded-md bg-black px-2 pb-4 pt-1 font-mono text-sm text-white lg:max-h-full ${terminalInView && "animate-fade-up"}`}
          >
            <h4 className="font-semibold">This is {project.title}.</h4>
            <p>{project.description}</p>
            <p>Tech used:</p>
            <ul>{tech}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

interface CarouselProps {
  projectTitle: string;
  urls: string[];
}

const MobileCarousel = ({ projectTitle, urls }: CarouselProps) => {
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
          className="w-full rounded-md border object-cover"
          src={url}
          width={2000}
          height={1080}
          alt={projectTitle}
        />
      </div>
    );
  });

  return (
    <div className="basis-[60%] md:hidden">
      <div className="carousel h-full w-full">{images}</div>
    </div>
  );
};

const DesktopCarousel = ({ projectTitle, urls }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClick(direction: "back" | "forward") {
    if (direction === "back") {
      if (currentIndex === 0) {
        setCurrentIndex(urls.length - 1);
        return;
      }
      setCurrentIndex((prev) => prev - 1);
      return;
    }

    if (currentIndex === urls.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  }
  return (
    <div className="hidden md:block md:basis-[60%]">
      <div className="carousel h-full w-full">
        <div className="carousel-item w-full md:relative">
          <Image
            className="w-full rounded-md border object-contain lg:object-cover"
            src={urls[currentIndex] ?? ""}
            width={2000}
            height={1080}
            alt={projectTitle}
          />
          <div className="absolute left-5 right-5 top-1/2 hidden -translate-y-1/2 transform justify-between md:flex">
            <button
              onClick={() => handleClick("back")}
              className="btn btn-circle border-none bg-black text-white hover:bg-white hover:text-black"
            >
              ❮
            </button>
            <button
              onClick={() => handleClick("forward")}
              className="btn btn-circle border-none bg-black text-white hover:bg-white hover:text-black"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
