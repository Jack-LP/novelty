import React, { useEffect, useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import BackgroundImage from '../../components/common/BackgroundImage';
import { numberWithCommas } from '../../utilities/numberWithCommas';
import { convertToHours } from '../../utilities/convertToHours';
import { useRouter } from 'next/router';
import { HourglassSplit, Fonts, BookHalf } from 'react-bootstrap-icons';

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
    <div className='py-28'>
      <BackgroundImage image='/img/user-bg.jpg' />
      <div className='container mx-auto flex flex-col gap-4'>
        <div className='flex gap-10'>
          <img
            className='w-96 h-[450px] object-cover rounded-lg'
            src={
              !bookData.imageLinks
                ? '/img/bookCover.svg'
                : bookData.imageLinks.thumbnail
            }
            alt={bookData.title}
          />
          <div className='flex flex-col gap-4 w-full bg-charcoal/25 backdrop-blur-lg p-10 rounded-lg '>
            <div className='flex flex-col gap-1 font-playfair text-white'>
              <h1 className='text-4xl  font-semibold'>
                {!bookData.title ? 'Title unknown' : bookData.title}
              </h1>
              <h2 className='text-white/50 font-normal text-lg'>
                {!bookData.authors ? 'Author(s) unknown' : bookData.authors}
              </h2>
            </div>
            <p className='text-white font-lora leading-7'>
              {!bookData.description
                ? 'No Description'
                : bookData.description.replace(
                    /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
                    ' '
                  )}
            </p>
            <div className='flex justify-between h-full items-end text-white font-inter font-light'>
              <span className='flex gap-2 items-center'>
                <BookHalf size={18} />
                Pages: {bookData.printedPageCount}
              </span>
              <span className='flex gap-2 items-center'>
                <Fonts size={18} />
                Words: {numberWithCommas(bookData.printedPageCount * 230)}
              </span>
              <span className='flex gap-2 items-center'>
                <HourglassSplit size={18} />
                Time:{' '}
                {convertToHours(
                  (bookData.printedPageCount * 230) / readingSpeed
                )}{' '}
                Hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
