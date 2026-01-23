import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {educations} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';


const EducationCard = ({index, name, grad, icon}) => {
  return (

    <div className='flex items-center gap-4'>
      <img
        src={icon}
        alt={name}
        className='w-30 h-20 object-contain'
      />
      <div>
        <p className='text-white font-semibold'>{name}</p>
        <p className='text-secondary font-semibold'>{grad}</p>
      </div>
    </div>
  );
}
const Education = () => {
  return (
    <>
          <motion.div>
            <h2 className={styles.sectionSubText}>Education</h2>
          </motion.div>
    
          <div className='mt-4 flex flex-wrap gap-10'>
            {educations.map((education, index) => (
              <EducationCard key={education.name} 
              index={index} {...education}/>
            ))}
          </div>

        </>
  )
}

export default Education