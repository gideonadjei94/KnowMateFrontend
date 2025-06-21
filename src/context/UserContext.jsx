import React, { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUserState] = useState(null);

  useEffect(() => {
    const getUserFromStorage = () => {
      const storedUser =
        JSON.parse(localStorage.getItem("km_user")) ||
        JSON.parse(sessionStorage.getItem("km_user"));
      if (storedUser) setUserState(storedUser);
    };

    getUserFromStorage();
  }, []);

  const setUser = ({ email, token }, remember = false) => {
    const userData = { email, token };
    if (remember) {
      localStorage.setItem("km_user", JSON.stringify(userData));
    } else {
      sessionStorage.setItem("km_user", JSON.stringify(userData));
    }
    setUserState(userData);
  };

  const logOut = () => {
    localStorage.removeItem("km_user");
    sessionStorage.removeItem("km_user");
    setUserState(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
