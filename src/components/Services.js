import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title capitalize'>
            My Services What I do for clients
          </h2>
        </div>
        <div className='grid lg:grid-cols-4 gap-8 mt-6 text-center'>
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className='bg-secondary hover:bg-gray-600 hover:[transform:scale(1.1)] transition-all p-6 rounded-2xl' key={index}>
                <div className='text-yellow-500 rounded-sm flex justify-center mb-12 text-4xl'>
                  <span className=''>{icon}</span>
                </div>
                <h4 className='text-xl font-medium mb-2'>{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
