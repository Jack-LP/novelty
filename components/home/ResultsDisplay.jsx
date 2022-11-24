import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import ResultsDisplayItem from './ResultsDisplayItem';

const ResultsDisplay = ({ bookData, displayToast }) => {
  const { bookshelf, setBookshelf } = useContext(UserContext);

  return !bookData ? null : (
    <div className='container mx-auto flex overflow-x-scroll md:overflow-x-hidden p-4 md:justify-between gap-4 bg-charcoal/25 backdrop-blur-lg p-4chrom md:p-10 rounded-lg'>
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
          displayToast={displayToast}
        />
      ))}
    </div>
  );
};

export default ResultsDisplay;
