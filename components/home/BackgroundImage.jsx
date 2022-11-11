import React from 'react';

const BackgroundImage = () => {
  return (
    <>
      <div className='w-screen h-screen absolute top-0 left-0 bg-gradient-to-t from-black/50 to-transparent -z-10' />
      <img
        className='absolute top-0 left-0 w-screen h-screen object-cover -z-20'
        src='img/home-bg.jpg'
        alt='background image'
      />
    </>
  );
};

export default BackgroundImage;