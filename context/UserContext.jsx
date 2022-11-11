import { createContext, useState, useEffect } from 'react';
import { setToStorage, getFromStorage } from '../utilities/localStorage';

const UserContext = createContext();

export const UserWrapper = ({ children }) => {
  const [username, setUsername] = useState(
    getFromStorage('username', false) || 'Novelty User'
  );
  const [avatar, setAvatar] = useState(
    getFromStorage('avatar', false) || 'img/avatar.webp'
  );
  const [readingSpeed, setReadingSpeed] = useState(
    getFromStorage('readingSpeed', false) || 230
  );

  useEffect(() => {
    setToStorage('username', username);
    setToStorage('readingSpeed', readingSpeed);
    setToStorage('avatar', avatar);
  }, [username, avatar, readingSpeed]);

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        avatar,
        setAvatar,
        readingSpeed,
        setReadingSpeed,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
