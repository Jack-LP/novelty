import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';

const Hero = ({ setBookData }) => {
  return (
    <div className='flex flex-col gap-14'>
      <div className='text-6xl text-white font-playfair font-bold'>
        <h1>How long does it take to read...</h1>
        <span>The Hobbit?</span>
      </div>
      <Searchbar setBookData={setBookData} />
    </div>
  );
};

export default Hero;
