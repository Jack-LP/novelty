import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyADAV_RuIVe-nZHJFf2HxmKdDHtvE_zAmM';

const Searchbar = ({ setBookData }) => {
  const [search, setSearch] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setBookData(null);
      fetchSearchData();
    }
  };

  const fetchSearchData = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=5&key=${API_KEY}`
      )
      .then((res) => {
        const data = res.data.items;
        setBookData(data);
      });
  };

  return (
    <>
      <input
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search'
        className='bg-charcoal placeholder-white/20 text-neutral-300 pl-4 py-3 w-1/2 rounded-lg font-inter outline-none'
      />
    </>
  );
};

export default Searchbar;
