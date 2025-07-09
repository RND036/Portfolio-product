import React from 'react'
import { LampDemo } from './ui/lamp'
import MagicButton from './ui/MagicButton'
import { FaFileAlt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-10" id='about'>
      <div>
        <LampDemo />
      </div>
      <div>
        
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 dark:text-gray-300 font-light tracking-wide">
          <img src="/exp1.svg" className='mx-auto block p-4' />
          I am a <span className="font-semibold text-primary">highly motivated Software Engineering undergraduate</span> at Staffordshire University with a strong passion for 
          <span> AI, machine learning,</span> and 
          <span > full-stack development</span>. I enjoy building practical software solutions that solve real-world problems,
          combining my skills in programming, data science, and web/mobile technologies.
          <br /><br />
          I have hands-on experience developing <span >machine learning models</span>, deploying APIs, and creating responsive user interfaces.
          I thrive in <span className="font-semibold">collaborative environments</span> where I can learn, innovate, and contribute to impactful projects.
        </p>
        <a href="/ravishkadissanayaka.pdf" download>
          <MagicButton title={'Download CV'} icon={<FaFileAlt/>} position={'left'} />
        </a>
      </div>
    </div>
  )
}

export default AboutMe
