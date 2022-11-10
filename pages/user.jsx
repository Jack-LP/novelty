import React from 'react';
import Link from 'next/link';

const user = () => {
  return (
    <div className='container mx-auto'>
      <span>user image</span>
      <h1>Username</h1>
      <h2>Reading Speed: 230</h2>
      <Link href='/speedTest'>
        <button className='bg-white p-4'>Take a speed test</button>
      </Link>
    </div>
  );
};

export default user;
