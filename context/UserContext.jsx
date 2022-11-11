import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserWrapper = ({ children }) => {
  const [username, setUsername] = useState('User');
  const [avatar, setAvatar] = useState('img/avatar.webp');
  const [readingSpeed, setReadingSpeed] = useState(0);

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
