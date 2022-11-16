import React from 'react';
import Link from 'next/link';

const ResultsDisplayItem = ({ bookId, thumbnail, title, author }) => {
  return (
    <Link href={`/books/${bookId}`}>
      <div className='flex flex-col gap-3 text-white w-[80px] overflow-hidden  whitespace-nowrap text-ellipsis'>
        <img
          className='h-[120px] object-cover rounded-md'
          src={thumbnail}
          alt={title}
        />
        <div className='flex flex-col font-lora'>
          <span className='font-medium text-white'>{title}</span>
          <span className='text-white/50 text-sm'>{author}</span>
        </div>
      </div>
    </Link>
  );
};

export default ResultsDisplayItem;
