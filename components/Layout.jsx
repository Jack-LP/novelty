import React from 'react';
import Head from 'next/head';
import Navbar from './common/Navbar';

const Layout = ({ children }) => {
  return (
    <div className='bg-paper min-h-screen'>
      <Head>
        <title>novelty</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
