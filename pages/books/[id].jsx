import React, { useEffect, useState, useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import BackgroundImage from '../../components/common/BackgroundImage';
import { numberWithCommas } from '../../utilities/numberWithCommas';
import { convertToHours } from '../../utilities/convertToHours';
import { useRouter } from 'next/router';
import {
  HourglassSplit,
  Fonts,
  BookHalf,
  PlusCircle,
  XCircle,
} from 'react-bootstrap-icons';

const API_KEY = 'AIzaSyADAV_RuIVe-nZHJFf2HxmKdDHtvE_zAmM';

const BookPage = () => {
  const [bookData, setBookData] = useState(null);
  const [isSaved, setIsSaved] = useState(null);

  const { readingSpeed, bookshelf, setBookshelf } = useContext(UserContext);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    !bookData
      ? axios
          .get(
            `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
          )
          .then((res) => {
            const data = res.data;
            setBookData(data.volumeInfo);
          })
      : null;
  }, [id, bookData]);

  useEffect(() => {
    const checkId = (element) => element.bookId === id;
    bookshelf.some(checkId) ? setIsSaved(true) : setIsSaved(false);
  }, [bookshelf, id]);

  const updateBookshelf = (action) => {
    if (action === 'add') {
      setBookshelf((prev) => [...prev, { title: bookData.title, bookId: id }]);
      displayToast('add');
    } else {
      setBookshelf((prev) =>
        prev.filter((book) => {
          return book.bookId !== id;
        })
      );
      displayToast('remove');
    }
  };

  const displayToast = (action) => {
    toast(action === 'add' ? 'Added to bookshelf' : 'Removed from bookshelf', {
      duration: 1500,
      position: 'bottom-left',
      icon: action === 'add' ? '📗' : '📕',
      style: {
        backgroundColor: '#2f2f2f',
        color: 'white',
        fontFamily: 'Inter',
      },
    });
  };

  return !bookData ? null : (
    <>
      <Head>
        <title>novelty | {bookData.title}</title>
      </Head>
      <Toaster />
      <div className='pt-4 xl:py-28'>
        <BackgroundImage image='/img/user-bg.jpg' />
        <div className='container mx-auto flex flex-col gap-4'>
          <div className='flex flex-col xl:flex-row items-center gap-4 xl:gap-10'>
            <img
              className='w-[190px] xl:w-96 h-[340px] xl:h-[450px] object-cover rounded-lg'
              src={
                !bookData.imageLinks
                  ? '/img/bookCover.svg'
                  : bookData.imageLinks.thumbnail
              }
              alt={bookData.title}
            />
            <div className='flex flex-col gap-6 w-full bg-charcoal/25 backdrop-blur-lg p-10 rounded-lg'>
              <div className='flex flex-col gap-1 font-playfair text-white'>
                <div className='flex gap-4 items-baseline'>
                  <h1 className='text-4xl font-semibold'>
                    {!bookData.title ? 'Title unknown' : bookData.title}
                  </h1>
                  {isSaved ? (
                    <button onClick={() => updateBookshelf('remove')}>
                      <XCircle size={22} />
                    </button>
                  ) : (
                    <button onClick={() => updateBookshelf('add')}>
                      <PlusCircle size={22} />
                    </button>
                  )}
                </div>
                <h2 className='text-white/50 font-normal text-lg'>
                  {!bookData.authors
                    ? 'Author(s) unknown'
                    : bookData.authors.join(', ')}
                </h2>
              </div>
              <p className='text-white font-lora leading-7 order-2'>
                {!bookData.description
                  ? 'No Description'
                  : bookData.description.replace(
                      /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
                      ' '
                    )}
              </p>
              <div className='flex justify-between h-full items-end text-white font-inter font-light order-1 xl:order-2'>
                <span className='flex flex-col gap-2 items-center'>
                  <BookHalf size={20} />
                  <div className='flex gap-1'>
                    <span className='hidden xl:inline'>Pages:</span>
                    {bookData.printedPageCount}
                  </div>
                </span>
                <span className='flex flex-col gap-2 items-center'>
                  <Fonts size={20} />
                  <div className='flex gap-1'>
                    <span className='hidden xl:inline'>Words:</span>
                    {numberWithCommas(bookData.printedPageCount * 230)}
                  </div>
                </span>
                <span className='flex flex-col gap-2 items-center'>
                  <HourglassSplit size={20} />
                  <div className='flex gap-1'>
                    <span className='hidden xl:inline'>Time:</span>
                    {`${convertToHours(
                      (bookData.printedPageCount * 230) / readingSpeed
                    )} Hrs`}
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPage;
