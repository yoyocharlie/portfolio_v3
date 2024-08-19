import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export const cursor_class = "custom-type-animation-cursor";
const Terminal = () => {
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

  return (
    <div className="relative mt-32">
      <div
        className={`container ml-auto mr-auto h-36 w-[90%] max-w-[1400px] rounded-md bg-black px-1 md:w-[80%]`}
      >
        <TypeAnimation
          sequence={[
            "Oh...",
            500,
            "I mean",
            500,
            "Hi there!",
            500,
            (el) => el?.classList.remove(cursor_class),
          ]}
          wrapper="h1"
          speed={50}
          style={{
            display: "inline-block",
            width: "100%",
          }}
          repeat={0}
          className={`font-mono leading-loose text-white ${cursor_class}`}
          cursor={false}
        />
        {showSecondAnimation && (
          <TypeAnimation
            sequence={[
              "I'm Jacob.",
              500,
              "I'm Jacob. The dev around here.",
              1500,
              (el) => el?.classList.remove(cursor_class),
            ]}
            wrapper="h1"
            speed={50}
            style={{
              display: "inline-block",
              width: "100%",
            }}
            repeat={0}
            className={`font-mono leading-loose text-white ${cursor_class}`}
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
