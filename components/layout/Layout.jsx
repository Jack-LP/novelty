import React from 'react';
import Navbar from '../../components/common/nav/Navbar';
import Sidebar from '../common/nav/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='relative min-h-screen bg-dark-100 px-48 font-inter text-white flex flex-col gap-20 pb-6'>
      <img
        className='fixed w-screen h-screen top-0 left-0 object-cover opacity-20 '
        src='/img/pattern-bg.jpg'
        alt=''
      />
      <Navbar />
      <div className='grid grid-cols-10 z-10'>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
