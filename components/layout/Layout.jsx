import React from 'react';
import Navbar from '../../components/common/nav/Navbar';
import Sidebar from '../common/nav/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='relative min-h-screen bg-dark-100 px-48 font-inter text-white flex flex-col gap-20'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
