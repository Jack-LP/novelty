import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserWrapper = ({ children }) => {
  const [username, setUsername] = useState('User');

  return (
    <UserContext.Provider value={{ username }}>{children}</UserContext.Provider>
  );
};

export default UserContext;
