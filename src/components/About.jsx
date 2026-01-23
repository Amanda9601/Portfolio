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

const About = () => {
  return (
    <>
      <motion.div>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='my-4 text-secondary text-[17px] max-w-3xl 
        leading-[30px]'
      >
        I am a Bachelor of Computer Science graduate from Monash University Malaysia.<br 
        className='sm:block hidden'/>I am eager to begin my career in the tech industry and 
        apply my knowledge in real-world projects.<br className='sm:block hidden'/>I work 
        well both independently and in collaborative team settings, supported
        by strong communication skills and a high sense of responsibility. I am
        self-motivated and continuously strive to improve my technical abilities and
        interpersonal skills.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} 
          index={index} {...tech}/>
        ))}

      </div>
    </>
  )
}

export default About