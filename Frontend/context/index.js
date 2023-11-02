import {createContext, useState} from 'react';

export const GlobalContext = createContext(null);

function GlobalState({children}) {
  const [showLogin, setShowLogin] = useState(false);
  const [currneUser, setCurrentUser] = useState('');
  const [activeUser, setActiveUser] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        showLogin,
        setShowLogin,
        currneUser,
        setCurrentUser,
        activeUser,
        setActiveUser,
        allUsers,
        setAllUsers,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
