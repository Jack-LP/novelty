import React from 'react';
import Link from 'next/link';

const ResultsDisplayItem = ({ bookId, thumbnail, title, author }) => {
  return (
    <Link href={`/books/${bookId}`}>
      <div className='flex flex-col text-white'>
        <img className='h-[300px] object-cover' src={thumbnail} alt={title} />
        <div className='flex flex-col'>
          <span className='font-semibold font-lora text-neutral-700 text-lg'>
            {title}
          </span>
          <span className='font-inter text-neutral-700/50'>{author}</span>
        </div>
      </div>
    </Link>
  );
};

export default ResultsDisplayItem;
