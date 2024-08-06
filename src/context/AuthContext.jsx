
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(
    localStorage.getItem("authToken") || null
  );

  const setAuthToken = (token) => {
    setAuthData(token);
    localStorage.setItem("authToken", token);
  };

  const clearAuthToken = () => {
    setAuthData(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthToken, clearAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};
