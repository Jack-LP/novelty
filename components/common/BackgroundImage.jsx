import React from 'react';

const BackgroundImage = ({ image }) => {
  return (
    <>
      <div className='w-screen h-screen fixed top-0 left-0 bg-gradient-to-t from-black/50 to-transparent -z-10' />
      <img
        className='fixed top-0 left-0 w-screen h-screen object-cover -z-20 pointer-events-none'
        src={image}
        alt='background image'
      />
    </>
  );
};

export default BackgroundImage;
