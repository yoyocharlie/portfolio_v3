import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { getAboutMe } from "~/api";
import Accordion from "./Accordion";

const About = () => {
  const { data: aboutMe } = useQuery({
    queryKey: ["about"],
    queryFn: getAboutMe,
  });
  const { ref: aboutRef, inView: aboutTitleInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: aboutTextRef, inView: aboutTextInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const text = aboutMe?.description?.map((textSection, i) => {
    return (
      <p
        key={`aboutMe${i}`}
        className={`text-body ${i != aboutMe.description.length ? "mb-5" : ""}`}
      >
        {textSection}
      </p>
    );
  });
  return (
    <div
      ref={aboutRef}
      className={`container relative ml-auto mr-auto w-[90%] max-w-[1400px] md:w-[80%]`}
    >
      <div id="about" className="absolute -top-16"></div>
      <h2 className={`text-category`}>
        <span className={`${aboutTitleInView && "animate-fade-right"}`}>A</span>
        <span
          className={`${aboutTitleInView && "animate-fade-right animate-delay-100"}`}
        >
          b
        </span>
        <span
          className={`${aboutTitleInView && "animate-fade-right animate-delay-150"}`}
        >
          o
        </span>
        <span
          className={`${aboutTitleInView && "animate-fade-right animate-delay-200"}`}
        >
          u
        </span>
        <span
          className={`${aboutTitleInView && "animate-fade-right animate-delay-[250ms]"}`}
        >
          t
        </span>
        <span
          className={`pl-2 ${aboutTitleInView && "animate-fade-right animate-delay-500"}`}
        >
          <span className="inline-block h-[4px] w-[clamp(30px,_26.5217px_+_1.087vi,_40px)] animate-pulse bg-black animate-normal animate-duration-1000 animate-fill-forwards animate-ease-out"></span>
        </span>
      </h2>
      <div
        ref={aboutTextRef}
        className={`${aboutTextInView && "animate-fade-up"} mb-10`}
      >
        <div className="font-sans">
          <p className="mb-5 font-bold">
            Software Developer & UI/UX Designer by day ☀; Music Producer by
            night 🌑
          </p>
          {text}
        </div>
      </div>
      <Accordion />
    </div>
  );
};

export default About;
