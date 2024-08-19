import React from "react";
import Link from "next/link";
import Image from "next/image";

const Tiles = () => {
  return (
    <div className="container relative ml-auto mr-auto hidden w-[90%] max-w-[1400px] gap-5 md:w-[80%] lg:grid lg:grid-cols-2 lg:grid-rows-2">
      <div id="about-me-tiles" className="absolute -top-[70px]"></div>
      <div className="rounded-lg bg-[#404040] p-5 text-white">
        <div className="mb-5 text-3xl">
          <Link className="group" href={"#about-me-tiles"}>
            Favorite Tech Right Now{" "}
            <span className="opacity-0 transition-all ease-in-out group-hover:inline-block group-hover:opacity-100">
              #
            </span>
          </Link>
        </div>
        <div className="font-sans text-body">
          <div className="mb-5">
            Lately I&apos;ve been enjoying scaffolding applications with{" "}
            <Link
              target="_blank"
              href={"https://create.t3.gg/"}
              className="bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text font-semibold text-transparent"
            >
              Create T3 App
            </Link>{" "}
            which is architected to be fully type-safe.
          </div>
          <div>
            <div className="mb-4 font-medium">My favorite tools include 👇</div>
            <ul className="max-w-[500px] text-body font-light">
              <li className="mb-3 flex items-start gap-5">
                <Link
                  target="_blank"
                  className="flex w-full max-w-14 gap-2 md:max-w-20"
                  href={"https://trpc.io/"}
                >
                  <Image
                    alt="tRPC"
                    src={"https://trpc.io/img/logo.svg"}
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-medium">tRPC</span>
                </Link>
                <span>For building type-safe RPC APIs</span>
              </li>
              <li className="mb-3 flex items-start gap-5">
                <Link
                  target="_blank"
                  className="flex w-full max-w-14 gap-2 md:max-w-20"
                  href={"https://www.prisma.io/"}
                >
                  <Image
                    alt="tRPC"
                    src={"https://www.svgrepo.com/show/354210/prisma.svg"}
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-medium">Prisma</span>
                </Link>
                <span>For abstracting SQL queries into readable methods</span>
              </li>
              <li className="mb-3 flex items-start gap-5">
                <Link
                  target="_blank"
                  className="flex w-full max-w-14 gap-2 md:max-w-20"
                  href={"https://nextjs.org/"}
                >
                  <Image
                    alt="tRPC"
                    src={"https://www.svgrepo.com/show/369457/nextjs.svg"}
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-medium">Next</span>
                </Link>
                <span>
                  For server-side rendering with React Server Components
                </span>
              </li>
              <li className="mb-3 flex items-start gap-5">
                <Link
                  target="_blank"
                  className="flex w-full max-w-14 gap-2 md:max-w-20"
                  href={"https://tanstack.com/query/latest"}
                >
                  <Image
                    alt="tRPC"
                    src={
                      "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png"
                    }
                    width={20}
                    height={20}
                    className="h-[20px] w-[20px]"
                  />
                  <span className="text-sm font-medium">React Query</span>
                </Link>
                <span>
                  For working in tandem with tRPC to call my api from my client.
                  Also query caching and invalidation are done relatively easy
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row-span-2 p-5">
        <div className="mb-5 text-3xl">Non-Programming Stuff</div>
        <div className="font-sans text-body">
          <div className="mb-5">
            When I&apos;m not programming, I&apos;m usually making music or
            staring at the milk in the fridge — trying to find the milk in the
            fridge.
          </div>
          <div className="mb-5">
            The most exciting thing that has happened with my music recently is
            that my song <b>&quot;call you when i&apos;m down&quot;</b> was
            released by my favorite record label,{" "}
            <Link
              className="bg-gradient-to-r from-red-700 to-red-400 bg-clip-text font-semibold text-transparent"
              href={"https://bitbirdofficial.com/"}
              target="_blank"
            >
              Bitbird
            </Link>
          </div>
          <div className="mb-5 font-medium">
            You can give it a listen here 🎧
          </div>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/0ExKBZMsPCLr6DRfrV8w0Q?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <div>
            <div className="mb-5 mt-10 font-medium">
              Check out my other songs here 👇
            </div>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/2QeDm3kj2f4qYcSDBjaP21?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-[#404040] p-5 text-white">
        <div className="mb-5 text-3xl">Current Project</div>
        <div className="font-sans text-body">
          <div className="mb-5">
            I&apos;m part of an agile team that uses{" "}
            <Link
              href={"https://www.atlassian.com/software/jira"}
              target="_blank"
              className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text font-semibold text-transparent"
            >
              Jira
            </Link>{" "}
            for project management, and I&apos;ve noticed how invaluable
            automations are to our workflow.
          </div>
          <div className="mb-5">
            <span className="font-medium">TLDR;</span> I&apos;m building an app
            for Jira that may or may not have something to do with automations
            🤓
          </div>
          <div>
            <h2 className="mb-3 font-medium">What tech am I using?</h2>
            <span className="font-light">
              Everything listed above in the &quot;Favorite Tech&quot; section
              and so much more! Including{" "}
              <Link
                target="_blank"
                className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text font-semibold text-transparent"
                href={
                  "https://developer.atlassian.com/cloud/jira/platform/getting-started-with-connect/"
                }
              >
                Atlassian Connect
              </Link>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
