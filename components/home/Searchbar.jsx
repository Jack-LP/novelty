import React from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyADAV_RuIVe-nZHJFf2HxmKdDHtvE_zAmM';

const Searchbar = ({ search, setSearch, setBookData }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setBookData(null);
      fetchSearchData();
    }
  };

  const fetchSearchData = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`
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
        placeholder='Search a book for its reading time...'
        className='p-2 rounded-lg font-lora w-[750px] text-lg'
      />
    </>
  );
};

export default Searchbar;
