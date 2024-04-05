import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useInView } from "react-intersection-observer";
import { getAboutMe } from "~/api";

const About = () => {
  const { data: aboutMe } = useQuery({
    queryKey: ["about"],
    queryFn: getAboutMe,
  });
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0,
  });
  return (
    <div
      ref={sectionRef}
      className={`container relative ml-auto mr-auto w-[90%] max-w-[1400px] md:w-[80%]`}
    >
      <div id="about" className="absolute -top-16"></div>
      <h2 className={`text-category`}>
        <span className={`${sectionInView && "animate-fade-right"}`}>A</span>
        <span
          className={`${sectionInView && "animate-fade-right animate-delay-100"}`}
        >
          b
        </span>
        <span
          className={`${sectionInView && "animate-fade-right animate-delay-150"}`}
        >
          o
        </span>
        <span
          className={`${sectionInView && "animate-fade-right animate-delay-200"}`}
        >
          u
        </span>
        <span
          className={`${sectionInView && "animate-fade-right animate-delay-[250ms]"}`}
        >
          t
        </span>
        <span
          className={`pl-2 ${sectionInView && "animate-fade-right animate-delay-500"}`}
        >
          <span className="inline-block h-[4px] w-[clamp(30px,_26.5217px_+_1.087vi,_40px)] animate-pulse bg-black animate-normal animate-duration-1000 animate-fill-forwards animate-ease-out"></span>
        </span>
      </h2>
      <div
        ref={sectionRef}
        className={`${sectionInView && "animate-fade-up"} mb-10`}
      >
        <p className="font-jp font-light">{aboutMe?.description}</p>
      </div>
    </div>
  );
};

export default About;
