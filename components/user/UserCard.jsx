import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import UserContext from '../../context/UserContext';
import { PencilSquare } from 'react-bootstrap-icons';

const UserCard = ({ setShowModal }) => {
  const { username, avatar, readingSpeed } = useContext(UserContext);

  return (
    <div className='relative bg-charcoal/25 backdrop-blur-lg p-10 rounded-lg flex items-center gap-6'>
      <img
        className='w-64 h-64 object-cover rounded-full'
        src={avatar}
        alt={!username ? null : username}
      />
      <div className='flex flex-col gap-6 text-white'>
        <h1 className='text-4xl  font-playfair font-semibold'>
          {!username ? null : username}
        </h1>
        <div className='flex flex-col gap-2'>
          <h2 className='font-inter text-xl font-light'>
            Reading Speed: {!readingSpeed ? null : readingSpeed} wpm
          </h2>
          <Link href='/speedTest'>
            <button className='bg-charcoal p-1.5 font-inter font-light rounded-lg'>
              Take a speed test
            </button>
          </Link>
        </div>
      </div>
      <button
        className='absolute top-4 right-4 text-white'
        onClick={() => setShowModal(true)}
      >
        <PencilSquare size={20} />
      </button>
    </div>
  );
};

export default UserCard;
