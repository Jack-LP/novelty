import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Plus } from 'react-bootstrap-icons';

const ResultsDisplayItem = ({
  bookId,
  thumbnail,
  title,
  author,
  bookshelf,
  setBookshelf,
  displayToast,
}) => {
  const [isSaved, setIsSaved] = useState(null);

  useEffect(() => {
    const checkId = (element) => element.bookId === bookId;
    bookshelf.some(checkId) ? setIsSaved(true) : setIsSaved(false);
  }, [bookshelf, bookId]);

  const updateBookshelf = (action) => {
    if (action === 'add') {
      setBookshelf((prev) => [...prev, { title: title, bookId: bookId }]);
      displayToast('add');
    } else {
      setBookshelf((prev) =>
        prev.filter((book) => {
          return book.bookId !== bookId;
        })
      );
      displayToast('remove');
    }
  };

  return (
    <div className='flex flex-col gap-3 text-white w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px] overflow-hidden  whitespace-nowrap text-ellipsis relative'>
      <button
        className='absolute top-2 right-2 bg-charcoal rounded-full'
        onClick={() => updateBookshelf(isSaved ? 'remove' : 'add')}
      >
        {isSaved ? <X size={28} /> : <Plus size={28} />}
      </button>
      <Link href={`/books/${bookId}`}>
        <img
          className='h-[180px] lg:h-[260px] xl:h-[290px] 2xl:h-[320px] object-cover rounded-md'
          src={thumbnail}
          alt={title}
        />
        <div className='flex flex-col font-lora'>
          <span className='font-medium text-white'>{title}</span>
          <span className='text-white/50 text-sm'>{author}</span>
        </div>
      </Link>
    </div>
  );
};

export default ResultsDisplayItem;
