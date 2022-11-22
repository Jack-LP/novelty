import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import BackgroundImage from '../components/common/BackgroundImage';
import UserCard from '../components/user/UserCard';
import UserContext from '../context/UserContext';
import EditModal from '../components/user/EditModal';

const User = () => {
  const [showModal, setShowModal] = useState(false);
  const [userDisplay, setUserDisplay] = useState(null);
  const { username, avatar, readingSpeed } = useContext(UserContext);

  useEffect(() => {
    setUserDisplay(
      <>
        <Head>
          <title>novelty | {username}</title>
        </Head>
        <BackgroundImage image={'img/user-bg.jpg'} />
        <EditModal showModal={showModal} setShowModal={setShowModal} />
        <div className='container mx-auto pt-28 flex flex-col gap-14'>
          <UserCard setShowModal={setShowModal} />
        </div>
      </>
    );
  }, [username, readingSpeed, avatar, showModal]);

  return <>{userDisplay}</>;
};

export default User;
