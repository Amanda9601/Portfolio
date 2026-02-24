import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {educations} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const EducationCard = ({index, name, grad, icon}) => {
  return (

    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)} className='flex-shrink-0'>
      <Tilt
        options={{
          max:45,
          scale: 1,
          speed:450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full'>
          <img
            src={icon}
            alt={name}
            className='w-30 h-full obejct-center'
          />
        </div>

        <div>
            <p className='text-white font-semibold'>{name}</p>
            <p className='text-secondary font-semibold'>{grad}</p>
        </div>

        
      </Tilt>
    </motion.div>
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