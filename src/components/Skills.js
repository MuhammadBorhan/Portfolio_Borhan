import React from 'react';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12' id='skill'>
      <div className='container mx-auto'
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <h1 className='text-center text-3xl font-bold mb-4'>My Skills</h1>
        <div
          className='grid grid-cols-3 md:grid-cols-7 gap-2'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='h-12 lg:h-20' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
