import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import useMousePosition from "~/hooks/useMousePosition";

const Terminal = () => {
  const mousePosition = useMousePosition();
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);
  const [showThirdAnimation, setShowThirdAnimation] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowSecondAnimation(true);
    }, 3800);

    const timeout2 = setTimeout(() => {
      setShowThirdAnimation(true);
    }, 7000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

  const mouseX = mousePosition.x && mousePosition.x * 0.01;
  const mouseY = mousePosition.y && mousePosition.y * 0.01;

  return (
    <div className="relative mt-28">
      <div
        className={`container ml-auto mr-auto h-36 w-[90%] max-w-[800px] rounded-md bg-black px-1 md:w-[80%]`}
        // style={{
        //   boxShadow: `-${mouseY}px -${mouseX}px gray`,
        //   transform: `skewX(${mouseY}deg) skewY(${mouseX}deg)`,
        // }}
      >
        <TypeAnimation
          sequence={[
            "Oh...",
            500,
            "I mean",
            500,
            "Hi there!",
            500,
            (el) => el?.classList.remove(CURSOR_CLASS_NAME),
          ]}
          wrapper="h1"
          speed={50}
          style={{
            display: "inline-block",
            width: "100%",
          }}
          repeat={0}
          className={`font-mono leading-loose text-white ${CURSOR_CLASS_NAME}`}
          cursor={false}
        />
        {showSecondAnimation && (
          <TypeAnimation
            sequence={[
              "I'm Jacob.",
              500,
              "I'm Jacob. The dev around here.",
              1500,
              (el) => el?.classList.remove(CURSOR_CLASS_NAME),
            ]}
            wrapper="h1"
            speed={50}
            style={{
              display: "inline-block",
              width: "100%",
            }}
            repeat={0}
            className={`font-mono leading-loose text-white ${CURSOR_CLASS_NAME}`}
            cursor={false}
          />
        )}
        {showThirdAnimation && (
          <TypeAnimation
            sequence={[
              "Take a look around and let me know if you need anything!",
            ]}
            wrapper="h1"
            speed={50}
            style={{
              display: "inline-block",
              width: "100%",
            }}
            repeat={0}
            className={`font-mono leading-loose text-white`}
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
