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

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={projectsRef}
      className={`container relative ml-auto mr-auto mt-20 w-[90%] max-w-[1400px] md:w-[80%]`}
    >
      <div id="projects" className="absolute -top-16"></div>
      <h2 className={`text-category`}>
        <span className={`${projectsInView && "animate-fade-right"}`}>P</span>
        <span
          className={`${projectsInView && "animate-fade-right animate-delay-100"}`}
        >
          r
        </span>
        <span
          className={`${projectsInView && "animate-fade-right animate-delay-150"}`}
        >
          o
        </span>
        <span
          className={`${projectsInView && "animate-fade-right animate-delay-200"}`}
        >
          j
        </span>
        <span
          className={`${projectsInView && "animate-fade-right animate-delay-[250ms]"}`}
        >
          e
        </span>
        <span
          className={`${projectsInView && "animate-fade-right animate-delay-300"}`}
        >
          c
        </span>
        <span
          className={`${projectsInView && "animate-fade-right animate-delay-[350ms]"}`}
        >
          t
        </span>
        <span
          className={`${projectsInView && "animate-fade-right animate-delay-[400ms]"}`}
        >
          s
        </span>
        <span
          className={`pl-2 ${projectsInView && "animate-fade-right animate-delay-500"}`}
        >
          <span className="inline-block h-[4px] w-[clamp(30px,_26.5217px_+_1.087vi,_40px)] animate-pulse bg-black animate-normal animate-duration-1000 animate-fill-forwards animate-ease-out"></span>
        </span>
      </h2>
      <div>{projectCards}</div>
    </div>
  );
};

export default Projects;
