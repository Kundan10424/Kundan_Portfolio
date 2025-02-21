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

// import React from 'react'
// import {Tilt} from 'react-tilt'
// import {motion} from 'framer-motion'
// import {technologies} from '../constants'
// import {fadeIn} from '../utils/motion'
// import { SectionWrapper } from '../hoc'


// const ServiceCard = ({ index, name, icon }) => {
//   return (
//     <Tilt className="w-[40vw] sm:w-[100px] md:w-[160px]"> 
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient
//          p-[1px] rounded-[20px] shadow-card"
//       >
//         <div
//           options={{
//             max: 45, 
//             scale: 1, 
//             speed: 450,
//           }}
//           className="bg-tertiary rounded-[20px] py-5 px-12 
//           min-h-[10px] md:py-4 md:px-10 md:min-h-[100px] 
//           flex justify-evenly items-center flex-col"
//         >
//           <img
//             scale = {2}
//             src={icon}
//             alt={name}
//             className="w-20 h-20 object-cover md:w-20 md:h-20"
//           />
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };


// const Tech = () => {
//   return (
//     <>
//       <div className= 'mt-0 flex flex-wrap gap-8'>
//         {technologies.map((technology) => (
//           <ServiceCard key={technology.index} icon={technology.icon} {...technology}/>
//         ))}
//       </div>

//     </>
//   )
// }

// export default SectionWrapper(Tech, " ")

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';

const Tech = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className='overflow-hidden w-full flex justify-center relative'>
      <motion.div
        className='flex gap-8'
        animate={{ x: isPaused ? 0 : ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {[...technologies, ...technologies].map((technology, index) => (
          <div 
            key={index} 
            className='flex-shrink-0 p-[1px] rounded-[20px] border-gray-300 green-pink-gradient sm:border-none'
          >
            <div className='bg-tertiary rounded-[20px] py-5 px-10 min-h-[10px] md:py-4 md:px-5 md:min-h-[100px] flex justify-evenly items-center flex-col '>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-10 h-10 sm:w-10 sm:h-10 object-contain md:w-20 md:h-20'
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, '');

