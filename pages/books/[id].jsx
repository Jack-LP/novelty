import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  convertToHours,
  toHoursAndMinutes,
} from '../../utilities/convertToHours';
import { useRouter } from 'next/router';

const API_KEY = 'AIzaSyADAV_RuIVe-nZHJFf2HxmKdDHtvE_zAmM';

const BookPage = () => {
  const [bookData, setBookData] = useState(null);

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
        src={bookData.imageLinks.thumbnail}
        alt={bookData.title}
      />
      <h1>{bookData.title}</h1>
      <h2>{bookData.authors}</h2>
      <p>{bookData.description}</p>
      <span>Pages: {bookData.printedPageCount}</span>
      <span>Word Count: {bookData.printedPageCount * 230}</span>
      <span>
        Time to read: {convertToHours((bookData.printedPageCount * 230) / 250)}{' '}
        Hours
      </span>
    </div>
  );
};

export default BookPage;
