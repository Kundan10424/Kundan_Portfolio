import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 
        top-[120px] max-w-7xl mx-auto 
        flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} text-white flex items-center gap-2`}>
          Hi, I'm
          <span className="text-[#915eff] italic inline-flex">
            <Typewriter
              options={{
                strings: [
                  'Kundan',
                  'a Developer',
                  'a Frontend Wizard',
                  'a React Developer',
                  'a Tech Enthusiast',
                  'a Software Engineer',
                  'a Creative Coder',
                  'a Web App Specialist',
                  'an Open Source Contributor',
                  'a UI/UX Enthusiast',
                  'a Tech Innovator',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-7 bottom-20 w-full flex justify-end right-10 items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4
          border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }} 
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
