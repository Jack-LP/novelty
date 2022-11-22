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
    <div className='bg-charcoal rounded-lg flex items-center xl:w-1/3'>
      <input
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search'
        className='bg-charcoal placeholder-white/20 text-neutral-300 pl-3 md:pl-4 py-2 md:py-3 w-full rounded-lg font-inter outline-none focus:ring-1 ring-white/50'
      />
      <button className='px-3' onClick={fetchSearchData}>
        <Search color='white' className='text-[20px] md:text-[24px]' />
      </button>
    </div>
  );
};

export default Searchbar;
