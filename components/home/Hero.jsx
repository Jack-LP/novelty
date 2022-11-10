import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import { heroBookTitles } from '../../data/heroBookTitles';

const Hero = ({ search, setSearch, setBookData }) => {
  return (
    <div className='relative flex flex-col items-center gap-10 bg-neutral-700 w-full py-10 rounded-xl'>
      <img
        src='img/hero-img.jpg'
        alt='Library'
        className='absolute top-0 left-0 max-h-full w-full object-cover blur-sm'
      />
      <div className='flex z-10 flex-col items-center gap-4 font-playfair text-white text-6xl font-semibold'>
        <h1>How long does it take to read...</h1>
        <span>The Hobbit</span>
      </div>
      <Searchbar
        search={search}
        setSearch={setSearch}
        setBookData={setBookData}
      />
    </div>
  );
};

export default Hero;
