import React from 'react';
import Link from 'next/link';
import NavButton from './NavButton';

const links = [
  { title: 'Home', href: '/' },
  { title: 'Speed test', href: '/speedTest' },
  { title: 'Search', href: '/' },
];

const NavDrawer = ({ isOpen, setIsOpen, avatar }) => {
  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } flex right-0 md:hidden fixed z-30 h-screen w-[65vw] bg-charcoal/50 backdrop-blur-lg justify-center pt-24 duration-500 ease-in-out text-white`}
    >
      <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='flex flex-col items-center gap-10'>
        <Link href='/user' onClick={() => setIsOpen(false)}>
          <img
            src={avatar}
            alt='2'
            className='w-16 h-16 rounded-full object-cover'
          />
        </Link>
        <div className='flex flex-col gap-6 font-inter items-center'>
          {links.map((link) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={link.href}
              href={`/${link.href}`}
              className='hover:text-white transition duration-200 ease-in-out text-lg'
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
