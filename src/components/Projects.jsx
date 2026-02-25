import React, { useState } from 'react'
import {useRef, useEffect} from 'react';
import { SectionWrapper } from '../hoc';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {Tilt} from "react-tilt";

import {github} from '../assets';
import {projects} from '../constants';
import {fadeIn, textVariant} from '../utils/motion'



const ProjectCard = ({index, name, tags, description, image, 
  source_code_link}) => {

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
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt={name}
              className='w-full h-full obejct-center rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end
            m-3 card-img_hover'>

              <div
                onClick={() => window.open
                  (source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full
                flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='github'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>

            </div>

          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>

            {Array.isArray(description) ? (
              <ul className='mt-2 text-secondary text-[14px]'>{description.map((point) =>(<li key={point} className='mt-2'>{point}</li>))}</ul>
            ) : (
              <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            )}
            
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
};

const Projects = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    if(!scrollRef.current) return;

    const scrollAmount = 200
    scrollRef.current.scrollBy({
      left: direction ==="left" ? -scrollAmount : scrollAmount,
      behavior:"smooth",
    });
  };

  // useEffect(() => {
  //   let frameId;

  //   const autoScroll = () => {

  //     console.log("Scroll", scrollRef.current.scrollLeft);

  //     if (!scrollRef.current) return;

  //     if (!isHovered) {
  //       scrollRef.current.scrollLeft += 1;
  //     }

  //     if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
  //       scrollRef.current.scrollLeft = 0;
  //       console.log("Reset", scrollRef.current.scrollLeft);
  //     }

  //     frameId = requestAnimationFrame(autoScroll);
  //   };

  //   autoScroll();

  //   return () => cancelAnimationFrame(frameId);
  // }, [isHovered]);


  return (
    <>
      <motion.div>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className='mt-3 text-secondary text-[17px] 
          max-w-3xl leading-[30px]'
        >
          The following projects highlight my skills and 
          experience through real-world applications. Each 
          project includes a brief description along with 
          links to the source code and live demos. Together, 
          they demonstrate my ability to solve complex 
          problems, work with diverse technologies, and manage 
          projects effectively.
        </motion.p>
      </div>

      <div className='relative mt-10'>

        {/* Left button */}
        <button 
        onClick={() => scroll("left")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black text-white p-3 rounded-full'
        >
          ◀
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='flex gap-7 overflow-x-auto pb-4 no-scrollbar'
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`}
            index={index}
            {...project}
            />
          ))}
        </div>

        {/* Right button */}
        <button 
        onClick={() => scroll("right")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black text-white p-3 rounded-full'
        >
          ▶
        </button>
      </div>

    </>
  );
};

export default SectionWrapper(Projects, "project");