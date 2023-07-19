import React, { useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import Link from 'next/link';
import { X } from 'react-bootstrap-icons';

const BookDisplay = ({
  bookId,
  title,
  author,
  thumbnail,
  pageCount,
  circleId,
  setPageCounts,
}) => {
  const { bookCircles, setBookCircles } = useContext(UserContext);

  useEffect(() => {
    setPageCounts((prev) => [...prev, pageCount]);
  }, [setPageCounts, pageCount]);

  const removeFromCircle = () => {
    const circleIndex = bookCircles.findIndex(
      (circle) => circle.name === circleId
    );

    const bookIndex = bookCircles[circleIndex].books.findIndex(
      (book) => book.id === bookId
    );

    const newBooksArray = [...bookCircles[circleIndex].books];
    newBooksArray.splice(bookIndex, 1);

    const newBookCircles = [...bookCircles];
    newBookCircles[circleIndex] = {
      ...newBookCircles[circleIndex],
      books: newBooksArray,
    };

    setBookCircles(newBookCircles);
  };

  return (
    <div>
      <div className='flex flex-col relative'>
        <button
          className='absolute top-2 right-2 bg-dark-200 rounded-md'
          onClick={removeFromCircle}
        >
          <X size={28} />
        </button>
        <Link
          className='w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px]'
          href={`/books/${bookId}`}
        >
          <img
            className='h-[180px] lg:h-[260px] xl:h-[290px] 2xl:h-[320px] object-cover'
            src={thumbnail}
            alt={title}
          />
          <div className='flex flex-col'>
            <h2 className='font-medium overflow-hidden whitespace-nowrap overflow-ellipsis'>
              {title}
            </h2>
            <h3 className='text-white/50 text-sm'>{author}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookDisplay;
