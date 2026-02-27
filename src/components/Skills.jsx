"use client"

import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {technologies} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {useInView} from "react-intersection-observer";


const SkillCard = ({skill, index}) => {
  const {ref, inView} = useInView({
    triggerOnce: true,
  })

  const imageVariants = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1},
  }

  return(
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={imageVariants}
      transition={{duration: 0.3}}
      whileHover={{scale: 1.4}}
      className='w-28 h-28 flex flex-col items-center justify-center cursor-pointer'
    >
      <img
        src={skill.icon}
        width={skill.width}
        height={skill.height}
        alt={skill.name}
      />
      <p className='text-sm mt-2 text-center'>{skill.name}</p>
    </motion.div>
  )
}

const Skills = () => {
  return (
    
    <div className='flex flex-row justify-around flex-wrap  gap-5 items-center'>
      {technologies.map((skill,index) => (
        <div className='w-28 h-28' key={skill.name}>
          <SkillCard key={skill.name} skill={skill} index={index}/>
        </div>
      ))}
    </div>
    
  )
}


// const TechCard = ({index, name, icon}) => {
//   return (
//     <p>{name}</p>
//   )
// }

// const Skills = () => {
//   return (
   
//       <div className='mt-4 flex flex-row flex-wrap justify-center 
//       gap-10'>
 
//         {technologies.map((tech, index) => (

//           <div className='w-28 h-28' key={tech.name}>
//             <TechCard key={tech.name} 
//             index={index} {...tech}/>
//             <BallCanvas icon={tech.icon}/>
//           </div>
          
//         ))}

//       </div>

   
//   )
// }




export default SectionWrapper(Skills, "");