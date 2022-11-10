import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import Hero from '../components/home/Hero';
import ResultsDisplay from '../components/home/ResultsDisplay';

export default function Home() {
  const [search, setSearch] = useState('');
  const [bookData, setBookData] = useState(null);

  return (
    <div className='container mx-auto flex flex-col py-20 items-center gap-20'>
      <Hero search={search} setSearch={setSearch} setBookData={setBookData} />
      <ResultsDisplay bookData={bookData} />
    </div>
  );
}
