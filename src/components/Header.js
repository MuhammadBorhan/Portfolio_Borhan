import React, { useEffect, useState } from 'react';

// import components
import Logo from '../assets/img/logo.svg';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${bg ? 'bg-slate-900 h-20' : 'h-20'
        } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href='#'>
          <h1 className='text-4xl font-bold'><span>Borhan</span><span className='text-purple-600'>Uddins</span></h1>
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
