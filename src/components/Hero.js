import React from 'react';
// import images
import fall from '../img/fall.png';
// import link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pretitle */}
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-800 mr-3'></div>Trend Setters
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            Fall Clothing Sale <br />
            <span className='font-semibold'>SPECIAL</span>
          </h1>
          <Link
            to={'/'}
            className='self-start uppercase font-semibold border-b-2 border-primary'
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          <img src={fall} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;