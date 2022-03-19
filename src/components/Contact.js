import React from 'react';

const Contact = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className='flex flex-col gap-x-10 lg:flex-row'>
          <div className='flex-1 bg-green-100'>1</div>
          <form className='space-y-4 w-full max-w-[780px]'>
            <div className='flex gap-4'>
              <input className='input' type='text' placeholder='Your name' />
              <input className='input' type='email' placeholder='Your email' />
            </div>
            <input className='input' type='text' placeholder='Subject' />
            <textarea
              className='outline-none w-full h-32 border border-[#D0D5DD] p-4 resize-none text-[#667085] placeholder:text-[#667085] focus:border focus:border-primary text-sm transition-all'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg bg-secondary hover:bg-secondary-hover'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
