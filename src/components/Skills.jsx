import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {technologies} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';


const TechCard = ({index, name, icon}) => {
  return (
    <p>{name}</p>
  )
}

const Skills = () => {
  return (
    <>
          <motion.div>
            <h2 className={styles.sectionSubText}>Skills</h2>
          </motion.div>
    
          <div className='mt-4 flex flex-wrap gap-10'>
            {technologies.map((tech, index) => (
              <TechCard key={tech.name} 
              index={index} {...tech}/>
            ))}
          </div>

        </>
  )
}

export default Skills