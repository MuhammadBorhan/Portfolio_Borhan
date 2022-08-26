import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import contact data
import { contact } from '../data';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('borhan1981', 'template_ygcp3wa', form.current, '6et-Yqyy95kVOjeVJ')
      .then((result) => {
        toast.success('Email send successfully')
      }, (error) => {
        toast.error(error.message);
      });
    e.target.reset();
  };
  return (
    <section className='section bg-primary opacity-80' id='contact'>
      <div className='container mx-auto'
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title'>
            Contact me
          </h2>
          <p className='subtitle text-white'>
            If you have any information please E-Mail me.<br />
            or<br />
            Phone: +8801402723759
          </p>
        </div>
        <div
          className='flex flex-col justify-center lg:gap-x-8 lg:flex-row'
        >
          {/* <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div> */}
          <form
            ref={form} onSubmit={sendEmail}
            className='space-y-4 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input className='input' type='text' name="clientName" placeholder='Your name' />
              <input className='input' type='email' name="email" placeholder='Your email' />
            </div>
            <input className='input' type='text' placeholder='Subject' />
            <textarea
              className='textarea'
              name='message'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg block mx-auto bg-green-700 hover:bg-blue-700'
              data-aos="zoom-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
