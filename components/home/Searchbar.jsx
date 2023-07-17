import React, { useState } from 'react';
import { Search } from 'react-bootstrap-icons';
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
    if (search.length > 0) {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=5&key=${API_KEY}`
        )
        .then((res) => {
          const data = res.data.items;
          setBookData(data);
        });
    }
  };

  return (
    <div className='relative'>
      <Search className='absolute top-3 left-3 text-white/20' />
      <input
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => setSearch(e.target.value)}
        className='bg-transparent border-2 outline-none border-white/10 rounded-md pl-9 h-10 w-[470px]'
        type='text'
        placeholder='Search...'
      />
    </div>
  );
};

export default Searchbar;
