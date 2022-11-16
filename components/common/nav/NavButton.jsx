import React from 'react';
import { List, X } from 'react-bootstrap-icons';

const NavButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className='fixed z-20 top-4 right-4 md:hidden'
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen ? (
        <X size={32} color={'white'} />
      ) : (
        <List size={32} color={'white'} />
      )}
    </button>
  );
};

export default NavButton;
