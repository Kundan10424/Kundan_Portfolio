import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full sm:w-[180px] md:w-[200px]"> 
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient
         p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45, 
            scale: 1, 
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 
          min-h-[150px] md:py-4 md:px-10 md:min-h-[200px] 
          flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain md:w-14 md:h-14"
          />
          <h3 className="text-white text-[20px] font-bold
           text-center md:text-[16px]"> 
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div
      varients = {textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
      varients = {fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]'>
        Hii 👋🏻! I'm Kundan, a skilled and passionate software developer 
        with expertise in JavaScript, TypeScript, React, and 
        Node.js. I have developed real-time collaborative apps 
        like Code Sync and created innovative platforms like 
        Co-Board. With a focus on crafting efficient, scalable, 
        and user-friendly solutions, I excel at turning ideas 
        into impactful applications. Let's collaborate to bring 
        your vison to life!
      </motion.p>

      <div className= 'mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, 'about')
