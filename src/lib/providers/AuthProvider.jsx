import { useState, createContext, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { authRef } from "../../services/firebase";

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    authRef.onAuthStateChanged((info) => setUser(info));
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default AuthProvider;
