import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Logo from '../assets/img/logo.svg';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='bg-tertiary py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <p className='text-white text-[15px]'>
            &copy; {date} All Rights Reserved By Borhan.
          </p>
          <div className='flex space-x-4 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-white opacity-80 hover:[transform:scale(1.3)] transition-all text-xl' target="_blank" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
