import React from 'react';
import Link from 'next/link';

const ResultsDisplayItem = ({ bookId, thumbnail, title, author }) => {
  return (
    <Link href={`/books/${bookId}`}>
      <div className='flex flex-col gap-3 text-white w-[120px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px] overflow-hidden  whitespace-nowrap text-ellipsis'>
        <img
          className='h-[180px] lg:h-[260px] xl:h-[290px] 2xl:h-[320px] object-cover rounded-md'
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
