import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../context/UserContext';
import EditModal from '../components/user/EditModal';
import Link from 'next/link';

const User = () => {
  const [showModal, setShowModal] = useState(false);
  const [userDisplay, setUserDisplay] = useState(null);
  const { username, avatar, readingSpeed } = useContext(UserContext);

  useEffect(() => {
    setUserDisplay(
      <>
        <EditModal showModal={showModal} setShowModal={setShowModal} />
        <div className='container mx-auto'>
          <button onClick={() => setShowModal(true)}>Edit</button>
          <img
            className='w-96 h-96 object-cover'
            src={avatar}
            alt={!username ? null : username}
          />
          <h1>{!username ? null : username}</h1>
          <h2>
            Reading Speed: {!readingSpeed ? null : readingSpeed} words per
            minute
          </h2>
          <Link href='/speedTest'>
            <button className='bg-white p-4'>Take a speed test</button>
          </Link>
        </div>
      </>
    );
  }, [username, readingSpeed, avatar, showModal]);

  return <>{userDisplay}</>;
};

export default User;
