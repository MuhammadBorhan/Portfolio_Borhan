import React from 'react';

// import img
import Image from '../assets/img/me.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex items-center flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[350px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3'>
                Md Borhan Uddin
              </h2>
              <p className='mb-4 text-accent'>
                ReactJS Developer / MERN Stack Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                I am a MERN Stack Developer and I have almost one year of experience. I specialize in javascript, react for Frontend project and nodejs, expressjs for Backend projects with mongoDB database. I also work on problem solving.<br />
                <br />I am prepared to contribute abilities while further developing acquired skills.
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
