import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const API_KEY = 'AIzaSyADAV_RuIVe-nZHJFf2HxmKdDHtvE_zAmM';

const BookDisplay = ({ bookId }) => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`
      )
      .then((res) => {
        const data = res.data;
        setBookData(data.volumeInfo);
      });
  }, [bookId]);

  return !bookData ? null : (
    <Link href={`/books/${bookId}`}>
      <div className='flex flex-col gap-3 text-white w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px] overflow-hidden whitespace-nowrap text-ellipsis'>
        <img
          className='h-[180px] lg:h-[260px] xl:h-[290px] 2xl:h-[320px] object-cover rounded-md'
          src={bookData.imageLinks.thumbnail}
          alt={bookData.title}
        />
        <div className='flex flex-col font-lora'>
          <span className='font-medium text-white'>{bookData.title}</span>
          <span className='text-white/50 text-sm'>{bookData.authors[0]}</span>
        </div>
      </div>
    </Link>
  );
};

export default BookDisplay;
