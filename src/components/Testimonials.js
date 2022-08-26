import React, { useEffect, useState } from 'react';

// import components
import TestiSlider from './TestiSlider';

const Testimonials = () => {

  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title'>
            What other people say
          </h2>
          <p className='subtitle text-justify'>
            As a MERN Stack developer, everyone needs to know about frontend and backend technology. Over 1 years I have been working hard on various frontend and backend technologies. I also created Website front-end design from PSD, Figma with HTML5, CSS3, JavaScript, React. I am also develop website backend with latest NodeJs, MongoDB and DaisyUi framework Technology. Below are links to some of the responsive sites I have created.
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;
