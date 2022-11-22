import React, { useContext, useEffect, useState } from 'react';
import NavDrawer from './NavDrawer';
import NavButton from './NavButton';
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setAvatarDisplay(avatar);
  }, [avatar]);

  return (
    <>
      <NavDrawer isOpen={isOpen} setIsOpen={setIsOpen} avatar={avatarDisplay} />
      <div className='w-full bg-charcoal/25 backdrop-blur-lg'>
        <nav className='container mx-auto flex relative justify-center lg:justify-between items-center py-3'>
          <ul className='flex gap-12 font-inter text-lg text-neutral-500'>
            {links.map((link) => (
              <li key={link.title} className='hidden lg:block'>
                <Link
                  href={`${link.href}`}
                  className='hover:text-white transition duration-200 ease-in-out'
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href='/'
            className='font-bold font-playfair text-3xl lg:text-4xl text-white lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2'
          >
            novelty
          </Link>
          <Link className='hidden lg:block' href='user'>
            <img
              src={avatarDisplay}
              alt='2'
              className='w-8 h-8 rounded-full object-cover'
            />
          </Link>
          <div className={`${isOpen ? 'hidden' : null} lg:hidden`}>
            <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
