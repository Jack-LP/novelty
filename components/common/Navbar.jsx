import React from 'react';

const Navbar = () => {
  return (
    <nav className='container mx-auto'>
      <ul className='flex justify-between items-center pt-2 pb-4 border-b-2 border-black/20'>
        <li>
          <a href='#' className='font-bold  text-3xl'>
            novelty
          </a>
        </li>
        <li>
          <input
            type='text'
            autoComplete='false'
            placeholder='Search'
            className='p-1'
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
