import React from 'react';
import Grocery from '../../assets/grocery.png';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className='min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35'> {/* Changed flex-row to flex-col on mobile */}
      {/* Hero Content */}
      <div className='flex-1 text-center md:text-left'> {/* Added text alignment for mobile */}
        <span className='bg-orange-100 text-orange-500 text-lg px-5 py-3 rounded-full'>Quality You Can Trust...</span>

        <h1 className='md:text-7xl leading-[5rem] text-5xl leading-[3.5rem] font-bold mt-4'> {/* Corrected Tailwind line-height syntax */}
           Fresh Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span>, Delivered Daily
        </h1>

        <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10 mx-auto md:mx-0'> {/* Corrected max-w syntax, added mx-auto for mobile */}
            "Experience the perfect balance of freshness, flavor, and nutrition with produce sourced from nature’s finest harvests."
        </p>

        <Button content="Shop Now" />
      </div>

      {/* Hero Image */}
      <div className='flex-1 flex justify-center mt-10 md:mt-0'> {/* Added centering for mobile image */}
        <img src={Grocery} alt="Hero Image" className='max-w-full h-auto' /> {/* Ensure image scales */}
      </div>
    </section>
  );
};

export default Hero;