import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import UserContext from '../context/UserContext';
import BackgroundImage from '../components/common/BackgroundImage';
import BookDisplay from '../components/bookshelf/BookDisplay';
import { Bookshelf as BookshelfIcon } from 'react-bootstrap-icons';

const Bookshelf = () => {
  const [hydrated, setHydrated] = useState(false);
  const { bookshelf, setBookshelf } = useContext(UserContext);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Head>
        <title>novelty | Bookshelf</title>
      </Head>
      <div className='pt-28'>
        <BackgroundImage image={'/img/user-bg.jpg'} />
        <div className='container mx-auto bg-charcoal/25 backdrop-blur-lg p-10 rounded-lg'>
          {hydrated ? (
            <div className='flex flex-col gap-4 items-center text-center text-white'>
              {bookshelf.length === 0 ? (
                <>
                  <BookshelfIcon className='w-16 h-16' />
                  <h1 className='text-2xl md:text-4xl font-lora'>
                    Your bookshelf is currently empty
                  </h1>
                  <h2 className='md:text-xl text-neutral-400'>
                    Save books by clicking the &quot;Add to bookshelf&quot;
                    button
                  </h2>
                </>
              ) : (
                <div className='flex gap-2'>
                  {bookshelf.map((book) => (
                    <BookDisplay key={book.bookId} bookId={book.bookId} />
                  ))}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
