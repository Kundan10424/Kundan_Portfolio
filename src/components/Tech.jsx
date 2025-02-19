// import React from 'react'
// import { BallCanvas } from './canvas'
// import { SectionWrapper } from '../hoc'
// import { technologies } from '../constants'


// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap
//     justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key = {technology.index}>
//           <BallCanvas icon ={technology.icon} key = {technology.index}/>
//         </div>
//       ))}

//     </div>
//   )
// }

// export default SectionWrapper(Tech, "")

import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {technologies} from '../constants'
import {fadeIn} from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, name, icon }) => {
  return (
    <Tilt className="w-[40vw] sm:w-[100px] md:w-[160px]"> 
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
          min-h-[10px] md:py-4 md:px-10 md:min-h-[100px] 
          flex justify-evenly items-center flex-col"
        >
          <img
            scale = {2}
            src={icon}
            alt={name}
            className="w-20 h-20 object-cover md:w-20 md:h-20"
          />
        </div>
      </motion.div>
    </Tilt>
  );
};


const Tech = () => {
  return (
    <>
      {/* <motion.div
      varients = {textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div> */}
{/* 
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
      </motion.p> */}

      <div className= 'mt-0 flex flex-wrap gap-8'>
        {technologies.map((technology) => (
          <ServiceCard key={technology.index} icon={technology.icon} {...technology}/>
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Tech, " ")
