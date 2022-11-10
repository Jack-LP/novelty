import React from 'react';
import ResultsDisplayItem from './ResultsDisplayItem';

const ResultsDisplay = ({ bookData }) => {
  return !bookData ? null : (
    <div className='grid grid-cols-5 grid-rows-2 gap-4'>
      {bookData.map((item) => (
        <ResultsDisplayItem
          key={item.id}
          bookId={item.id}
          thumbnail={item.volumeInfo.imageLinks.thumbnail}
          title={item.volumeInfo.title}
          author={item.volumeInfo.authors[0]}
        />
      ))}
    </div>
  );
};

export default ResultsDisplay;
