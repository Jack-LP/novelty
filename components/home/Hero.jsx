import React, { useEffect } from 'react';
import Searchbar from './Searchbar';
import { heroBookTitles } from '../../data/heroBookTitles';
import TypewriterComponent from 'typewriter-effect';

const Hero = ({ setBookData }) => {
  useEffect(() => {
    const array = heroBookTitles;
    const shuffleTitles = () => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };
    shuffleTitles();
  }, []);

  return (
    <div className='flex flex-col items-center md:items-start gap-14'>
      <div className='flex flex-col gap-4 md:gap-0 items-center md:items-start text-3xl md:text-6xl text-white text-center md:text-start font-playfair font-bold'>
        <h1 className='md:w-full w-2/3'>How long does it take to read...</h1>
        <div className='w-full text-2xl md:text-6xl'>
          <TypewriterComponent
            options={{
              strings: heroBookTitles,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <Searchbar setBookData={setBookData} />
    </div>
  );
};

export default Hero;
