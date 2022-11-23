import React from 'react';
import Navbar from '../../components/common/nav/Navbar';

const Layout = ({ children }) => {
  return (
    <div className='relative'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
