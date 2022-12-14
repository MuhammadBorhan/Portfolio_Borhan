import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css'

// import social data
import { social } from '../data';

// import woman image
import profile from '../assets/img/profile.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <div className='flex items-center h-full pt-2'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-2xl md:text-3xl text-indigo-500 '>
              Hello, I'm Borhan
            </p>
            <h1 className='text-2xl mt-2 md:text-4xl font-bold'>
              <span style={{ color: 'yellow', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['Developer Borhan', 'MERN Stack Developer', 'ReactJS Developer']}
                  loop={Infinity}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className=' md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Skill of building application with Frontend and Backend operations.
            </p>

            <div className='flex items-center gap-2 mt-4 md:mt-[-20px]'>
              <h2 className='flex items-center gap-2'>
                <span className='text-xl'>Hire Me</span>
                <span>
                  <img className='w-8' src="https://emoji.gg/assets/emoji/7962_arrow_join.png" alt="" />
                </span>
              </h2>
              <a href="Resume_of_Borhan.pdf" download='Resume_of_Borhan.pdf'>
                <button className=" rounded text-xl hover:bg-orange-400 transition-all hover:translate-x-1 hover:text-white bg-gray-500 text-yellow-400 p-2 font-bold">Get Resume</button>
              </a>
            </div>

            <div className='flex space-x-4 items-center mt-6 justify-center'>
              {social.map((item, index) => {
                const { href, icon } = item;
                return (
                  <a className='text-white hover:[transform:scale(1.7)] opacity-80 text-2xl mt-4 transition-all' target="_blank" href={href} key={index}>
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
          <div className='hidden hero-profile lg:w-[380px] lg:h-[380px] lg:justify-center lg:ml-[300px] lg:flex flex-1 justify-end items-center h-full'>
            <div className="profile-image hover:[transform:scale(1.1)] transition-all">

            </div>
            {/* <img className='w-80 p-12' src={profile} alt='' /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
