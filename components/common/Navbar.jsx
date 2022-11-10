import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='container mx-auto'>
      <ul className='flex relative justify-between items-center py-4'>
        <li>
          <Link href='/' className='font-bold font-playfair text-3xl'>
            novelty
          </Link>
        </li>
        <li className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex gap-12 font-inter text-lg text-neutral-700'>
            <a href='#'>Home</a>
            <a href='#'>Books</a>
            <a href='#'>Search</a>
          </div>
        </li>
        <li>
          <input
            type='text'
            autoComplete='false'
            placeholder='Search'
            className='pl-2 py-1 rounded-lg font-inter outline-none focus:ring-2 ring-offset-2'
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
