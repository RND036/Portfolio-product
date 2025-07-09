'use client';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

// Technology icons
import {
  SiLaravel,
  SiPhp,
  SiPython,
  SiFlutter,
  SiReact,
  SiTensorflow,
  SiFastapi,
  SiPandas,
  SiNumpy,
  SiKotlin,
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiMysql,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

// Technologies from your CV
const techIcons = [
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "React", icon: <SiReact /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "Numpy", icon: <SiNumpy /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "Django", icon: <SiDjango /> },
  // { name: "Java", icon: <SiJava /> }, // Removed due to missing icon
  // { name: "Java", icon: <SiJava /> }, // Removed due to missing icon
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "MERN Stack", icon: <FaNodeJs /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id:number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("ravishkanimsara20@gmail.com");
    setCopied(true);
  }
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1  relative  overflow-hidden flex flex-col justify-between space-y-4 rounded-3xl   transition duration-200 hover:shadow-xldark:shadow-none border-white/[0.1]",
        className,
      )}
      style={{
         background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
        <div className={`${id === 6 && 'flex justify-center'} h-full`}>
            <div className="w-full h-full absolute">
                { img && (
                    <img
                      src={img }
                      alt={img}
                      className={cn(imgClassName,'object-cover,object-center')}
                    />  
                )}

            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                { spareImg && (
                    <img
                      src={spareImg }
                      alt={spareImg}
                      className={cn(imgClassName,'object-cover,object-center w-full h-full')}
                    />
                )}
            </div>
            {id === 6 && (
                <BackgroundGradientAnimation>
                </BackgroundGradientAnimation>
            )}
            <div className={cn( titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
            <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
                {description}
            </div>
               <div className=" font-sans text-lg font-bold lg:text-3xl max-w-96 z-10">
                {title}
              </div>
            {id === 2 && <GlobeDemo />   }
            {id === 3 && (
              <div className="flex flex-wrap gap-3 w-full justify-center mt-4">
                {techIcons.map(({ name, icon }) => (
                  <div key={name} className="relative group">
                    <span
                      className="text-2xl lg:text-3xl p-2 rounded-lg bg-[#10132E] text-cyan-300 hover:scale-110 transition-transform cursor-pointer"
                      aria-label={name}
                    >
                      {icon}
                    </span>
                    {/* Tooltip */}
                    <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-xs text-cyan-100 px-2 py-1 rounded shadow z-20 whitespace-nowrap">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {id === 6 && (
                <div className="mt-5 relative">
                  <div className="absolute -bottom-5 right-0">
                    <Lottie options={{
                      loop:copied,
                      autoplay:copied,
                      animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },

                    }}/>

                  </div>
                  <MagicButton
                  title={copied ? 'Email is Copied!':'Copy my Email'}
                  icon={<IoCopyOutline/>} 
                  position="left"
                  otherClasses="!bg-[#161A31]"
                  handleClick={handleCopy}
                  />
                </div>
                )}

          </div>
       </div>
       </div>
  );
};
