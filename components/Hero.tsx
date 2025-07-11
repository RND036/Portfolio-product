import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import TypewriterComponent from "./ui/Typewriter";
import Link from "next/link";

function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute left-0 top-0  flex h-screen w-full items-center justify-center bg-black dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",

            "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10 w-full">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Turning Vision into Code
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl w-full max-w-[90vw] break-words mx-auto px-4"
            words="Transforming Concepts Into Seamless User Experience"
          />

          <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl flex justify-center flex-wrap gap-1">
            <span>Hi, I&apos;m Ravishka,</span>
            <TypewriterComponent />
          </div>

          <Link href="/#projects">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position={"right"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
