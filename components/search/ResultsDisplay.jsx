import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import ResultsDisplayItem from './ResultsDisplayItem';

const ResultsDisplay = () => {
  const { bookshelf, setBookshelf, bookData } = useContext(UserContext);

  return !bookData ? null : (
    <div className='flex flex-wrap justify-between gap-y-10'>
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
          bookshelf={bookshelf}
          setBookshelf={setBookshelf}
        />
      ))}
    </div>
  );
};

export default ResultsDisplay;
