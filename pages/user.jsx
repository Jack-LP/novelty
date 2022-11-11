import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import EditModal from '../components/user/EditModal';
import Link from 'next/link';

const User = () => {
  const [showModal, setShowModal] = useState(false);
  const { username, avatar, readingSpeed } = useContext(UserContext);

  return (
    <>
      <EditModal showModal={showModal} setShowModal={setShowModal} />
      <div className='container mx-auto'>
        <button onClick={() => setShowModal(true)}>Edit</button>
        <img src={avatar} alt={username} />
        <h1>{username}</h1>
        <h2>Reading Speed: {readingSpeed} words per minute</h2>
        <Link href='/speedTest'>
          <button className='bg-white p-4'>Take a speed test</button>
        </Link>
      </div>
    </>
  );
};

export default User;
