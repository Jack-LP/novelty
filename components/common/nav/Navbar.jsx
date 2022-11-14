import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../../context/UserContext';
import Link from 'next/link';

const links = [
  { title: 'Home', href: '/' },
  { title: 'Speed test', href: '/speedTest' },
  { title: 'Search', href: '/' },
];

const Navbar = () => {
  const { avatar } = useContext(UserContext);
  const [avatarDisplay, setAvatarDisplay] = useState(null);

  useEffect(() => {
    setAvatarDisplay(avatar);
  }, [avatar]);

  return (
    <div className='w-full bg-charcoal/25 backdrop-blur-lg'>
      <nav className='container mx-auto flex relative justify-between items-center py-4'>
        <ul className='flex gap-12 font-inter text-lg text-neutral-500'>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={`/${link.href}`}
                className='hover:text-white transition duration-200 ease-in-out'
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href='/'
          className='font-bold font-playfair text-4xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        >
          novelty
        </Link>
        <Link className='flex' href='/user'>
          <img
            src={avatarDisplay}
            alt='2'
            className='w-8 h-8 rounded-full object-cover'
          />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
