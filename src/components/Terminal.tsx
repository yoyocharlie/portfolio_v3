import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Terminal = () => {
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);
  const [showThirdAnimation, setShowThirdAnimation] = useState(false);
  const [showFourthAnimation, setShowFourthAnimation] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowSecondAnimation(true);
    }, 2500);

    const timeout2 = setTimeout(() => {
      setShowThirdAnimation(true);
    }, 5000);

    const timeout3 = setTimeout(() => {
      setShowFourthAnimation(true);
    }, 9000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

  return (
    <div className="relative mt-20">
      <div className="container relative top-20 ml-auto mr-auto h-96 w-[90%] max-w-[800px] rounded-md bg-[#24292e] px-1 md:w-[80%]">
        <TypeAnimation
          sequence={[
            "C:\\Users\\JacobP\\portfolio>",
            1000,
            "C:\\Users\\JacobP\\portfolio> Oh...",
            1000,
            (el) => el?.classList.remove(CURSOR_CLASS_NAME),
          ]}
          wrapper="h1"
          speed={50}
          style={{
            display: "inline-block",
            width: "100%",
          }}
          repeat={0}
          className={`font-mono text-white ${CURSOR_CLASS_NAME}`}
          cursor={false}
          preRenderFirstString={true}
        />
        {showSecondAnimation && (
          <TypeAnimation
            sequence={[
              "C:\\Users\\JacobP\\portfolio>",
              1000,
              "C:\\Users\\JacobP\\portfolio> Hi there!",
              1000,
              (el) => el?.classList.remove(CURSOR_CLASS_NAME),
            ]}
            wrapper="h1"
            speed={50}
            style={{
              display: "inline-block",
              width: "100%",
            }}
            repeat={0}
            className={`font-mono text-white ${CURSOR_CLASS_NAME}`}
            preRenderFirstString={true}
            cursor={false}
          />
        )}
        {showThirdAnimation && (
          <TypeAnimation
            sequence={[
              "C:\\Users\\JacobP\\portfolio>",
              1000,
              "C:\\Users\\JacobP\\portfolio> I'm Jacob. The dev around here.",
              1000,
              (el) => el?.classList.remove(CURSOR_CLASS_NAME),
            ]}
            wrapper="h1"
            speed={50}
            style={{
              display: "inline-block",
              width: "100%",
            }}
            repeat={0}
            className={`font-mono text-white ${CURSOR_CLASS_NAME}`}
            cursor={false}
            preRenderFirstString={true}
          />
        )}
        {showFourthAnimation && (
          <TypeAnimation
            sequence={[
              "C:\\Users\\JacobP\\portfolio>",
              1000,
              "C:\\Users\\JacobP\\portfolio> Take a look around and let me know if you need anything!",
            ]}
            wrapper="h1"
            speed={50}
            style={{
              display: "inline-block",
              width: "100%",
            }}
            repeat={0}
            className={`font-mono text-white`}
            preRenderFirstString={true}
          />
        )}
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

export default Terminal;
