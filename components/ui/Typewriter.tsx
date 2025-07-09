"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div >
      <Typewriter
        options={{
          strings: ["Software Engineering Undergraduate", "Full Stack Developer", "AI/ML Enthusiast","Creative Problem Solver"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
