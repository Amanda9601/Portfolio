import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {educations} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const EducationCard = ({index, name, grad, icon}) => {
  return (

    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)} className='w-full sm:w-auto'>
      <Tilt
        options={{
          max:45,
          scale: 1,
          speed:450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:max-w-[360px] w-full max-w-full"
      >
        <div className='relative w-full flex justify-center mb-3'>
          <img
            src={icon}
            alt={name}
            className='w-[200px] h-full object-contain'
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
    
          <div className='mt-4 flex flex-wrap gap-10 w-full overflow-hidden'>
            {educations.map((education, index) => (
              <EducationCard key={education.name} 
              index={index} {...education}/>
            ))}
          </div>

        </>
  )
}

export default Education