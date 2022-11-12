import React, { useEffect, useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import { convertToHours } from '../../utilities/convertToHours';
import { useRouter } from 'next/router';

const API_KEY = 'AIzaSyADAV_RuIVe-nZHJFf2HxmKdDHtvE_zAmM';

const BookPage = () => {
  const [bookData, setBookData] = useState(null);

  const { readingSpeed } = useContext(UserContext);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`)
      .then((res) => {
        const data = res.data;
        setBookData(data.volumeInfo);
      });
  }, [id]);

  return !bookData ? null : (
    <div className='container mx-auto flex flex-col gap-4'>
      <img
        className='w-96'
        src={
          !bookData.imageLinks
            ? '/img/bookCover.svg'
            : bookData.imageLinks.thumbnail
        }
        alt={bookData.title}
      />
      <h1>{!bookData.title ? 'Title unknown' : bookData.title}</h1>
      <h2>{!bookData.authors ? 'Author(s) unknown' : bookData.authors}</h2>
      <p>{!bookData.description ? 'No Description' : bookData.description}</p>
      <span>Pages: {bookData.printedPageCount}</span>
      <span>Word Count: {bookData.printedPageCount * 230}</span>
      <span>
        Time to read:{' '}
        {convertToHours((bookData.printedPageCount * 230) / readingSpeed)} Hours
      </span>
    </div>
  );
};

export default BookPage;
