import React, { useState, useEffect, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  // Retrieves the user from localStorage and then sets it to state.
  const retrieveUser = () => {
    const result = JSON.parse(localStorage.getItem('user'));

    // If no user set in localStorage, use default
    if (!result) return;

    setUser(result);
  };

  // Updates the user in localStorage. Called in an effect.
  const updateUserInStorage = newUser => {
    const newUserToStore = JSON.stringify(newUser);
    localStorage.setItem('user', newUserToStore);
  };

  const updateUser = newUser => setUser(newUser);

  /*
    Update user in localStorage whenever user is updated, provided that user is not an empty string.
  */

  useEffect(() => {
    if (user !== '') {
      updateUserInStorage(user);
    }
  }, [user]);

  useEffect(() => {
    retrieveUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
