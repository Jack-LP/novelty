import React from 'react';
import ResultsDisplayItem from './ResultsDisplayItem';

const ResultsDisplay = ({ bookData }) => {
  return !bookData ? null : (
    <div className='grid grid-cols-6 grid-rows-2 gap-4 bg-white p-6 rounded-lg'>
      {bookData.map((item) => (
        <ResultsDisplayItem
          key={item.id}
          thumbnail={item.volumeInfo.imageLinks.thumbnail}
          title={item.volumeInfo.title}
          author={item.volumeInfo.authors[0]}
        />
      ))}
    </div>
  );
};

export default ResultsDisplay;
