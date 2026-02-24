import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {Skills, Education} from '../components';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='my-4 text-secondary text-[17px] max-w-3xl 
        leading-[30px]'
      >
        <p>
          I am an Advanced Computer Science student at Monash University Malaysia with a 
          strong interest in software development and data analytics.
        </p>
        <p className='mt-4'>
          I am currently 
          seeking part-time opportunities to gain industry experience and contribute to meaningful 
          tech projects.
        </p>
        <p className='mt-4'>
          I work 
          well both independently and in collaborative team settings, supported
          by strong communication skills and a high sense of responsibility. I am
          self-motivated and continuously strive to improve my technical abilities and
          interpersonal skills.
        </p>
       

      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='my-10 max-w-3xl 
        leading-[30px]'
      >
        <Education/>
      </motion.p>


    </>
  )
}

export default SectionWrapper(About, "about")