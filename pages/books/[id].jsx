import React, { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import { numberWithCommas } from '../../utilities/numberWithCommas';
import { convertToHours } from '../../utilities/convertToHours';
import { useRouter } from 'next/router';
import { HourglassSplit, Fonts, BookHalf, Plus } from 'react-bootstrap-icons';
import ModalAddBook from '../../components/common/ModalAddBook';

const API_KEY = 'AIzaSyADAV_RuIVe-nZHJFf2HxmKdDHtvE_zAmM';

const BookPage = () => {
  const [currentBook, setCurrentBook] = useState();
  const [bookData, setBookData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { readingSpeed } = useContext(UserContext);

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
    !bookData
      ? null
      : setCurrentBook({
          id: id,
          title: bookData.title,
          author: bookData.author,
          thumbnail: bookData.imageLinks.thumbnail,
          pageCount: bookData.pageCount,
        });
  }, [bookData, id]);

  return !bookData ? null : (
    <>
      <Head>
        <title>novelty | {bookData.title}</title>
      </Head>
      {showModal ? (
        <ModalAddBook currentBook={currentBook} setShowModal={setShowModal} />
      ) : null}
      <div className='col-span-9'>
        <div className='grid grid-cols-10 gap-10 bg-dark-200/50 backdrop-blur-md p-4 rounded-md'>
          <img
            className='object-cover col-span-2 w-full'
            src={
              !bookData.imageLinks
                ? '/img/bookCover.svg'
                : bookData.imageLinks.thumbnail
            }
            alt={bookData.title}
          />
          <div className='flex flex-col gap-6 col-span-8'>
            <div className='flex flex-col gap-1 '>
              <div className='flex gap-4 items-baseline'>
                <h1 className='text-4xl font-semibold'>
                  {!bookData.title ? 'Title unknown' : bookData.title}
                </h1>
                <button onClick={() => setShowModal(true)}>
                  <Plus size={22} />
                </button>
              </div>
              <h2 className='text-white/50 text-lg'>
                {!bookData.authors
                  ? 'Author(s) unknown'
                  : bookData.authors.join(', ')}
              </h2>
            </div>
            <p className='leading-7 order-2'>
              {!bookData.description
                ? 'No Description'
                : bookData.description.replace(
                    /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
                    ' '
                  )}
            </p>
            <div className='flex gap-4 h-full items-end font-light order-1 xl:order-2'>
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
    </>
  );
};

export default BookPage;
