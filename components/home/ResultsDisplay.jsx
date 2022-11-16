import React from 'react';
import ResultsDisplayItem from './ResultsDisplayItem';

const ResultsDisplay = ({ bookData }) => {
  return !bookData ? null : (
    <div className='container mx-auto flex flex-wrap justify-center md:justify-between gap-4 bg-charcoal/25 backdrop-blur-lg p-4 md:p-10 rounded-lg'>
      {bookData.map((item) => (
        <ResultsDisplayItem
          key={item.id}
          bookId={item.id}
          thumbnail={
            !item.volumeInfo.imageLinks
              ? '/img/bookCover.svg'
              : item.volumeInfo.imageLinks.thumbnail
          }
          title={
            !item.volumeInfo.title ? 'Title unknown' : item.volumeInfo.title
          }
          author={
            !item.volumeInfo.authors
              ? 'Author(s) unknown'
              : item.volumeInfo.authors[0]
          }
        />
      ))}
    </div>
  );
};

export default ResultsDisplay;
