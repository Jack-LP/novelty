import { useContext, useEffect, useState } from 'react';
import { BookHalf } from 'react-bootstrap-icons';
import NavDrawer from './NavDrawer';
import NavButton from './NavButton';
import Searchbar from './Searchbar';
import UserContext from '../../../context/UserContext';
import Link from 'next/link';

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
      <nav className='flex gap-20 items-center py-6 text-white border-b-[1px] border-white/5 z-10'>
        <Link href='/' className='font-semibold flex items-center gap-2'>
          <BookHalf size={20} />
          Novelty
        </Link>
        <Searchbar />
        <Link className='hidden lg:block ml-auto' href='/user'>
          <img
            src={avatarDisplay ? avatarDisplay : '/img/avatar.webp'}
            alt=''
            className='w-10 h-10 rounded-full object-cover'
          />
        </Link>
        <div className={`${isOpen ? 'hidden' : null} lg:hidden`}>
          <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
