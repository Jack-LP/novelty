import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { X } from 'react-bootstrap-icons';

const API_KEY = 'AIzaSyADAV_RuIVe-nZHJFf2HxmKdDHtvE_zAmM';

const BookDisplay = ({ bookId, setBookshelf, displayToast }) => {
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

  const removeFromShelf = () => {
    setBookshelf((prev) =>
      prev.filter((book) => {
        return book.bookId !== bookId;
      })
    );
    displayToast();
  };

  return !bookData ? null : (
    <div>
      <div className='flex flex-col gap-3 text-white w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px] overflow-hidden whitespace-nowrap text-ellipsis relative'>
        <button
          className='absolute top-2 right-2 bg-charcoal rounded-full'
          onClick={removeFromShelf}
        >
          <X size={28} />
        </button>
        <Link href={`/books/${bookId}`}>
          <img
            className='h-[180px] lg:h-[260px] xl:h-[290px] 2xl:h-[320px] object-cover rounded-md'
            src={
              !bookData.imageLinks
                ? '/img/bookCover.svg'
                : bookData.imageLinks.thumbnail
            }
            alt={bookData.title}
          />
          <div className='flex flex-col '>
            <span className='font-medium text-white'>
              {!bookData.title ? 'Title unknown' : bookData.title}
            </span>
            <span className='text-white/50 text-sm'>
              {!bookData.authors ? 'Author(s) unknown' : bookData.authors[0]}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookDisplay;
