import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Form from "./Form";

const Contact = () => {
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div
      ref={contactRef}
      className={`container relative ml-auto mr-auto mt-24 w-[90%] max-w-[1400px] md:w-[80%]`}
    >
      <div id="contact" className="absolute -top-16"></div>
      <h2 className={`text-category`}>
        <span className={`${contactInView && "animate-fade-right"}`}>C</span>
        <span
          className={`${contactInView && "animate-fade-right animate-delay-100"}`}
        >
          o
        </span>
        <span
          className={`${contactInView && "animate-fade-right animate-delay-150"}`}
        >
          n
        </span>
        <span
          className={`${contactInView && "animate-fade-right animate-delay-200"}`}
        >
          t
        </span>
        <span
          className={`${contactInView && "animate-fade-right animate-delay-[250ms]"}`}
        >
          a
        </span>
        <span
          className={`${contactInView && "animate-fade-right animate-delay-[300ms]"}`}
        >
          c
        </span>
        <span
          className={`${contactInView && "animate-fade-right animate-delay-[350ms]"}`}
        >
          t
        </span>
        <span
          className={`pl-2 ${contactInView && "animate-fade-right animate-delay-500"}`}
        >
          <span className="inline-block h-[4px] w-[clamp(30px,_26.5217px_+_1.087vi,_40px)] animate-pulse bg-black animate-normal animate-duration-1000 animate-fill-forwards animate-ease-out"></span>
        </span>
      </h2>
      <div className="mb-10 font-sans">
        <p className="font-bold">Let&apos;s work together!</p>
        <p className="mb-5 text-body">
          Hit me up with the form below and I will be in touch ASAP{" "}
          <span className="inline-block rotate-180">💨</span>
          <span className="inline-block scale-x-[-1]">🏃‍♂️</span>
        </p>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
