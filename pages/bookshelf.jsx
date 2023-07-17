import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import toast, { Toaster } from 'react-hot-toast';
import UserContext from '../context/UserContext';
import BookDisplay from '../components/bookshelf/BookDisplay';
import CircleDisplay from '../components/bookshelf/CircleDisplay';
import Heading from '../components/common/Heading';
import { Bookshelf as BookshelfIcon, PlusCircle } from 'react-bootstrap-icons';

const Bookshelf = () => {
  const [hydrated, setHydrated] = useState(false);
  const { bookshelf, setBookshelf } = useContext(UserContext);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const displayToast = () => {
    toast('Removed from bookshelf', {
      duration: 1500,
      position: 'bottom-left',
      icon: '📕',
      style: {
        backgroundColor: '#2f2f2f',
        color: 'white',
        fontFamily: 'Inter',
      },
    });
  };

  return (
    <div className='col-span-9'>
      <Head>
        <title>novelty | Bookshelf</title>
      </Head>
      <Toaster />
      <Heading>Bookshelf</Heading>
      <div className='bg-dark-200 p-5 rounded-md'>
        <CircleDisplay />
      </div>
    </div>
  );
};

export default Bookshelf;
