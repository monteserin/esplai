import { createContext, useState, useContext } from "react";

export const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <AppContext.Provider value={[user, setUser]}>
      {children}
    </AppContext.Provider>
  );
};

export default UserProvider;
