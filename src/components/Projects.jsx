import React from 'react'
import { SectionWrapper } from '../hoc';
import {motion} from 'framer-motion';
import {styles} from '../styles';

const Projects = () => {
  return (
    <>
      <motion.div>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </motion.div>
    </>
  )
}

export default SectionWrapper(Projects, "");