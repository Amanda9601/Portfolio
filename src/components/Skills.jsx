import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {technologies} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";



const TechCard = ({index, name, icon}) => {
  return (
    <p>{name}</p>
  )
}

const Skills = () => {
  return (
   
      <div className='mt-4 flex flex-row flex-wrap justify-center 
      gap-10'>
 
        {technologies.map((tech, index) => (

          <div className='w-28 h-28' key={tech.name}>
            <TechCard key={tech.name} 
            index={index} {...tech}/>
            <BallCanvas icon={tech.icon}/>
          </div>
          
        ))}

      </div>

   
  )
}


// const Skills = () => {
//   return (
//     <div className="mt-4 h-[600px]">
//       <BallCanvas technologies={technologies} />
//     </div>
//   );
// };

export default SectionWrapper(Skills, "");