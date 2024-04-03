import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useInView } from "react-intersection-observer";
import { getProjects } from "~/api";
import Project from "./Project";

const Projects = () => {
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const projectCards = projects?.map((project) => {
    return <Project key={project.title} project={project} />;
  });

  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={sectionRef}
      className={`container relative ml-auto mr-auto w-[90%] max-w-[1400px] md:w-[80%]`}
    >
      <div id="projects" className="absolute -top-16"></div>
      <h2 className={`text-category`}>
        <span className={`${sectionInView && "animate-fade-right"}`}>P</span>
        <span
          className={`${sectionInView && "animate-fade-right animate-delay-100"}`}
        >
          r
        </span>
        <span
          className={`${sectionInView && "animate-fade-right animate-delay-150"}`}
        >
          o
        </span>
        <span
          className={`${sectionInView && "animate-fade-right animate-delay-200"}`}
        >
          j
        </span>
        <span
          className={`${sectionInView && "animate-fade-right animate-delay-[250ms]"}`}
        >
          e
        </span>
        <span
          className={`${sectionInView && "animate-fade-right animate-delay-300"}`}
        >
          c
        </span>
        <span
          className={`${sectionInView && "animate-fade-right animate-delay-[350ms]"}`}
        >
          t
        </span>
        <span
          className={`${sectionInView && "animate-fade-right animate-delay-[400ms]"}`}
        >
          s
        </span>
        <span
          className={`pl-2 ${sectionInView && "animate-delay-500 animate-fade-right"}`}
        >
          <span className="animate-ease-out animate-normal animate-fill-forwards animate-duration-1000 inline-block h-[4px] w-[clamp(30px,_26.5217px_+_1.087vi,_40px)] animate-pulse bg-black"></span>
        </span>
      </h2>
      <div>{projectCards}</div>
    </div>
  );
};

export default Projects;
