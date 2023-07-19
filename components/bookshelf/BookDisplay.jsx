import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { X } from 'react-bootstrap-icons';

const API_KEY = 'AIzaSyADAV_RuIVe-nZHJFf2HxmKdDHtvE_zAmM';

const BookDisplay = ({ bookId, setPageCounts }) => {
  const [bookDisplayData, setBookDisplayData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`
      )
      .then((res) => {
        const data = res.data;
        setBookDisplayData(data.volumeInfo);
        setPageCounts((prev) => [...prev, data.volumeInfo.pageCount]);
      });
  }, [bookId, setPageCounts]);

  const removeFromShelf = () => {
    setBookshelf((prev) =>
      prev.filter((book) => {
        return book.bookId !== bookId;
      })
    );
  };

  return !bookDisplayData ? null : (
    <div>
      <div className='flex flex-col relative'>
        <button
          className='absolute top-2 right-2 bg-dark-200 rounded-md'
          onClick={removeFromShelf}
        >
          <X size={28} />
        </button>
        <Link
          className='w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px]'
          href={`/books/${bookId}`}
        >
          <img
            className='h-[180px] lg:h-[260px] xl:h-[290px] 2xl:h-[320px] object-cover'
            src={
              !bookDisplayData.imageLinks
                ? '/img/bookCover.svg'
                : bookDisplayData.imageLinks.thumbnail
            }
            alt={bookDisplayData.title}
          />
          <div className='flex flex-col'>
            <h2 className='font-medium overflow-hidden whitespace-nowrap overflow-ellipsis'>
              {!bookDisplayData.title ? 'Title unknown' : bookDisplayData.title}
            </h2>
            <h3 className='text-white/50 text-sm'>
              {!bookDisplayData.authors
                ? 'Author(s) unknown'
                : bookDisplayData.authors[0]}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookDisplay;
