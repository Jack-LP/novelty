import React from 'react';
import ResultsDisplayItem from './ResultsDisplayItem';

const ResultsDisplay = ({ bookData }) => {
  return !bookData ? null : (
    <div className='container mx-auto flex justify-between bg-charcoal/25 backdrop-blur-lg p-10 rounded-lg'>
      {bookData.map((item) => (
        <ResultsDisplayItem
          key={item.id}
          bookId={item.id}
          thumbnail={
            !item.volumeInfo.imageLinks
              ? null
              : item.volumeInfo.imageLinks.thumbnail
          }
          title={!item.volumeInfo.title ? null : item.volumeInfo.title}
          author={!item.volumeInfo.authors ? null : item.volumeInfo.authors[0]}
        />
      ))}
    </div>
  );
};

export default ResultsDisplay;
