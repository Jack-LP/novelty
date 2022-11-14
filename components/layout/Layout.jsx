import React from 'react';
import Navbar from '../../components/common/nav/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
