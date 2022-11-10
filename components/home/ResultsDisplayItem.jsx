import React from 'react';

const ResultsDisplayItem = ({ thumbnail, title, author }) => {
  return (
    <div className='flex flex-col text-white'>
      <img className='h-[300px] object-cover' src={thumbnail} alt={title} />
      <div className='flex flex-col'>
        <span className='font-semibold font-lora text-neutral-700 text-lg'>
          {title}
        </span>
        <span className='font-inter text-neutral-700/50'>{author}</span>
      </div>
    </div>
  );
};

export default ResultsDisplayItem;
