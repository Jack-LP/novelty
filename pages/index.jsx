import React, { useState } from 'react';
import Heading from '../components/home/Heading';
import Searchbar from '../components/home/Searchbar';
import ResultsDisplay from '../components/home/ResultsDisplay';

export default function Home() {
  const [search, setSearch] = useState('');
  const [bookData, setBookData] = useState(null);

  return (
    <div className='container mx-auto flex flex-col py-20 items-center gap-20'>
      <Heading />
      <Searchbar
        search={search}
        setSearch={setSearch}
        setBookData={setBookData}
      />
      <ResultsDisplay bookData={bookData} />
    </div>
  );
}
