import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";

const AuthContext = createContext();

export const UseAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuth must be used in a auth provider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [openLoginform, setOpenLoginForm] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const checkIsTokenExpired = (token) => {
      if (!token) return true;

      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const expiry = payload.exp;

        if (!expiry) return true;

        const now = Math.floor(Date.now() / 1000);
        return now >= expiry;
      } catch (error) {
        console.error("Invalid token format", error);
        return true;
      }
    };

    if (user) {
      const isTokenExpired = checkIsTokenExpired(user?.token);
      if (isTokenExpired) {
        setSessionExpired(true);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        openLoginform,
        setOpenLoginForm,
        sessionExpired,
        setSessionExpired,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
