import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Link from 'next/link';

const Navbar = () => {
  const { avatar, username } = useContext(UserContext);

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
            <Link href='/'>Home</Link>
            <Link href='/'>Books</Link>
            <Link href='/'>Search</Link>
          </div>
        </li>
        <li>
          <Link href='/user'>
            <img
              src={avatar}
              alt={username}
              className='w-8 h-8 rounded-full object-cover'
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
