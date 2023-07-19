import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import ModalAddBook from './ModalAddBook';
import ResultsDisplayItem from './ResultsDisplayItem';

const ResultsDisplay = () => {
  const [hydrated, setHydrated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentBook, setCurrentBook] = useState();
  const { bookshelf, setBookshelf, bookData } = useContext(UserContext);

  const openModal = (bookId, title) => {
    setCurrentBook(bookId);
    setShowModal(true);
  };

  return !bookData ? null : (
    <>
      <div className={`${showModal ? 'block' : 'hidden'}`}>
        <ModalAddBook setShowModal={setShowModal} currentBook={currentBook} />
      </div>
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
            openModal={openModal}
          />
        ))}
      </div>
    </>
  );
};

export default ResultsDisplay;
