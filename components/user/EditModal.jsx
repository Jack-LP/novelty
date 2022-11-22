import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import UserContext from '../../context/UserContext';
import { X } from 'react-bootstrap-icons';

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
      } top-0 left-0 z-10 w-screen h-screen flex justify-center items-center bg-black/50 backdrop-blur-lg`}
      onClick={() => setShowModal(false)}
    >
      <div
        className='container max-w-[340px] mx-auto relative flex items-center flex-col p-6 gap-10 bg-charcoal/50 text-white rounded-lg font-inter'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute top-2 right-2'
          onClick={() => setShowModal(false)}
        >
          <X size={28} />
        </button>
        <div className='flex flex-col gap-2'>
          <span className='text-lg'>Avatar</span>
          <img
            src={avatar}
            alt=''
            className='w-64 h-64 object-cover rounded-md'
          />
          <label
            htmlFor='avatarUpload'
            className='cursor-pointer bg-charcoal rounded-lg p-2 flex justify-center'
          >
            Upload Avatar
          </label>
          <input
            id='avatarUpload'
            className='hidden'
            type='file'
            onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-lg'>Name</span>
          <input
            className='bg-charcoal p-1 pl-2 rounded-lg'
            onChange={(e) => setUsernameEdit(e.target.value)}
            type='text'
            defaultValue={username}
            placeholder={'Enter new name'}
          />
          <div className='flex gap-2'>
            <button
              className='bg-charcoal p-2 rounded-lg'
              onClick={resetDefaults}
            >
              Reset to default
            </button>
            <button
              className='bg-charcoal p-2 rounded-lg'
              onClick={handleUsernameChange}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

{
  /* <img className='w-20 h-20 object-cover' src={avatar} alt={username} />
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
        <button onClick={resetDefaults}>Reset to default</button> */
}
