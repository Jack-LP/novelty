import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import UserContext from '../context/UserContext';
import ModalCreateCircle from '../components/bookshelf/ModalCreateCircle';
import CircleDisplay from '../components/bookshelf/CircleDisplay';
import Heading from '../components/common/Heading';
import { Bookshelf as BookshelfIcon, PlusCircle } from 'react-bootstrap-icons';

const Bookshelf = () => {
  const [hydrated, setHydrated] = useState();
  const [showModal, setShowModal] = useState(false);
  const { bookCircles } = useContext(UserContext);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated ? (
    <div className='col-span-9 flex flex-col gap-3'>
      <div className={`${showModal ? 'block' : 'hidden'}`}>
        <ModalCreateCircle setShowModal={setShowModal} />
      </div>
      <Head>
        <title>novelty | Bookshelf</title>
      </Head>
      <Heading>Bookshelf</Heading>
      <div className='flex flex-wrap gap-3'>
        {bookCircles.map((circle) => (
          <CircleDisplay circle={circle} key={circle.name} />
        ))}
        <button onClick={() => setShowModal((prev) => !prev)}>
          Create New Circle
        </button>
      </div>
    </div>
  ) : null;
};

export default Bookshelf;
