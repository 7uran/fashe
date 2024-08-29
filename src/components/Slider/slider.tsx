"use client"
import { useState } from 'react';
import { slides } from '../../mockdb';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa6";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full h-[540px] overflow-hidden group">

      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{ opacity: currentIndex === 0 ? 1 : 0 }}
      >
        <img
          src={slides[0]}
          alt="Slide 1"
          className="w-full h-full object-cover"
        />
        <div className='absolute z-[1] top-0 text-white text-center w-full h-full justify-center flex items-center flex-col'>
          <h2 className='text-[18px]'>
            Women Collection 2018
          </h2>
          <h1 className='py-6 text-6xl font-extrabold' >NEW ARRIVALS</h1>
          <button className=' rounded-full bg-white text-black px-10 py-3 hover:bg-main transition hover:text-white'>SHOP NOW</button>
        </div>
      </div>
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{ opacity: currentIndex === 1 ? 1 : 0 }}
      >
        <img
          src={slides[1]}
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
        <div className='absolute z-[1] top-0 w-full h-full justify-center flex items-center flex-col text-white text-center'>
          <h2 className='text-[18px]'>
            Women Collection 2018
          </h2>
          <h1 className='py-6 text-6xl font-extrabold' >NEW ARRIVALS</h1>
          <button className=' rounded-full bg-white text-black px-10 py-3 hover:bg-main transition hover:text-white'>SHOP NOW</button>
        </div>
      </div>
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{ opacity: currentIndex === 2 ? 1 : 0 }}
      >
        <img
          src={slides[2]}
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
        <div className='absolute z-[1] top-0 text-white text-center w-full h-full justify-center flex items-center flex-col'>
          <h2 className='text-[18px]'>
            Women Collection 2018
          </h2>
          <h1 className='py-6 text-6xl font-extrabold' >NEW ARRIVALS</h1>
          <button className=' rounded-full bg-white text-black px-10 py-3 hover:bg-main transition hover:text-white'>SHOP NOW</button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute hover:bg-main transition opacity-0 z-[1]  group-hover:opacity-65 left-10 rounded-full flex items-center justify-center w-10 h-10 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white"
      >
        <FaAngleLeft />

      </button>
      <button
        onClick={nextSlide}
        className="absolute hover:bg-main transition opacity-0 group-hover:opacity-65 z-[1]  right-10  rounded-full flex items-center justify-center w-10 h-10 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white"
      >
        <FaAngleRight />

      </button>
    </div>
  );
};

export default Slider;
