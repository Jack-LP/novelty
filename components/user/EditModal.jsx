import React, { useEffect, useContext, Children } from 'react';
import UserContext from '../../context/UserContext';

const EditModal = ({ showModal, setShowModal }) => {
  const { username, setUsername, avatar, setAvatar } = useContext(UserContext);

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setShowModal(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [setShowModal]);

  console.log(avatar);

  return (
    <div
      className={` ${
        showModal ? 'absolute' : 'hidden'
      } top-0 left-0 w-screen h-screen flex justify-center items-center bg-neutral-700/75 backdrop-blur-md`}
      onClick={() => setShowModal(false)}
    >
      <div
        className='flex flex-col p-6 bg-white'
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => setShowModal(false)}>Close</button>
        <img className='w-20 h-20 object-cover' src={avatar} alt={username} />
        <input
          type='file'
          onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))}
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          type='text'
          placeholder={'Enter your username'}
        />
      </div>
    </div>
  );
};

export default EditModal;
