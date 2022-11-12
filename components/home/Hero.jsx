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
    <div className='flex flex-col gap-14'>
      <div className='text-6xl text-white font-playfair font-bold'>
        <h1>How long does it take to read...</h1>
        <TypewriterComponent
          options={{
            strings: heroBookTitles,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <Searchbar setBookData={setBookData} />
    </div>
  );
};

export default Hero;
