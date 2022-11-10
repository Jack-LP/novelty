import React from 'react';

const ResultsDisplayItem = ({ thumbnail, title, author }) => {
  return (
    <div className='flex flex-col gap-2 max-w-[200px] bg-neutral-700 text-white'>
      <img className='h-[300px] object-cover' src={thumbnail} alt={title} />
      <div className='flex flex-col gap-1 px-2'>
        <span className='font-semibold'>{title}</span>
        <span className='text-sm'>{author}</span>
      </div>
    </div>
  );
};

export default ResultsDisplayItem;
