import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { SectionWrapper } from '../hoc';
import {fadeIn, textVariant} from '../utils/motion';
import { certifications } from '../constants';


const CertificationCard = ({index, name, position, description,
   image}) => {
  return (
    <>
       <motion.div
        variants={fadeIn("", "spring", index*0.5, 0.75)}
        className='bg-black-200 p-10 rounded-3xl xs:w-[420px]
        w-full'
      >
        <p className='text-white font-black text-[40px]'>"</p>

        <div>
          <p className='text-white tracking-wider
          text-[18px]'>{description}</p>
          
          <div className='mt-7 flex justify-between items-center
          gap-1'>
            <div className='flex-1 flex flex-col'>
              <p className='text-white font-medium text-[17px]'>
                <span className='blue-text-gradient'>
                  
                </span> {name}
              </p>
              <p className='mt-1 text-secondary text-[15px]'>
                {position}
              </p>
            </div>

            {/* <img
              src={image}
              alt={`feedback-by-${name}`}
              className='w-20 h-25 object-cover'
            /> */}

          </div>

        </div>
      </motion.div>
    </>
  )
}

const Certification = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>

      <div className={`${styles.padding} bg-tertiary rounded-2xl 
      min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>
            Certifications
          </h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap
      gap-7`}>
        {certifications.map((certification, index) => (
          <CertificationCard
            key={certification.name}
            index={index}
            {...certification}
          />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Certification, "")