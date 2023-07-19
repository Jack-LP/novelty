import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Plus } from 'react-bootstrap-icons';

const ResultsDisplayItem = ({
  bookId,
  thumbnail,
  title,
  author,
  pageCount,
  bookshelf,
  openModal,
}) => {
  const [isSaved, setIsSaved] = useState(null);

  useEffect(() => {
    const checkId = (element) => element.bookId === bookId;
    bookshelf.some(checkId) ? setIsSaved(true) : setIsSaved(false);
  }, [bookshelf, bookId]);

  return (
    <div className='flex flex-col relative'>
      <button
        className='absolute top-2 right-2 bg-dark-200 rounded-md'
        onClick={() => openModal(bookId, title, author, thumbnail, pageCount)}
      >
        {isSaved ? <X size={28} /> : <Plus size={28} />}
      </button>
      <Link
        href={`/books/${bookId}`}
        className='flex flex-col gap-3 w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px]'
      >
        <img className='h-[310px] object-cover' src={thumbnail} alt={title} />
        <div className='flex flex-col'>
          <h2
            title={title}
            className='font-medium overflow-hidden whitespace-nowrap overflow-ellipsis'
          >
            {title}
          </h2>
          <h3 className='text-white/50 text-sm'>{author}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ResultsDisplayItem;
