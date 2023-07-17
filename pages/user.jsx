import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import UserCard from '../components/user/UserCard';
import UserContext from '../context/UserContext';
import EditModal from '../components/user/EditModal';

const User = () => {
  const [showModal, setShowModal] = useState(false);
  const [userDisplay, setUserDisplay] = useState(null);
  const { username, avatar, readingSpeed } = useContext(UserContext);

  useEffect(() => {
    setUserDisplay(
      <div className='col-span-9'>
        <Head>
          <title>novelty | {username}</title>
        </Head>
        <EditModal showModal={showModal} setShowModal={setShowModal} />
        <div className='flex flex-col gap-14'>
          <UserCard setShowModal={setShowModal} />
        </div>
      </div>
    );
  }, [username, readingSpeed, avatar, showModal]);

  return <>{userDisplay}</>;
};

export default User;
