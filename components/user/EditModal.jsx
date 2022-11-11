import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import UserContext from '../../context/UserContext';

const EditModal = ({ showModal, setShowModal }) => {
  const [usernameEdit, setUsernameEdit] = useState('');
  const { username, setUsername, avatar, setAvatar } = useContext(UserContext);

  const router = useRouter();

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

  const handleUsernameChange = () => {
    if (usernameEdit.length > 0 && usernameEdit.length < 15) {
      setUsername(usernameEdit);
      setUsernameEdit('');
    }
  };

  const resetDefaults = () => {
    localStorage.clear();
    router.reload(window.location.pathname);
  };

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
        <span>{username}</span>
        <input
          onChange={(e) => setUsernameEdit(e.target.value)}
          type='text'
          placeholder={'Enter your username'}
          value={usernameEdit}
        />
        <button onClick={handleUsernameChange}>Submit</button>
        <button onClick={resetDefaults}>Reset to default</button>
      </div>
    </div>
  );
};

export default EditModal;
