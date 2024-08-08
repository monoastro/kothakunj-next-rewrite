"use client";

import React, { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

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
    localStorage.removeItem("authToken");
    const navigate = useNavigate();
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthToken, clearAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const clearAuthToken = () => {
  localStorage.removeItem("authToken");
  const navigate = useNavigate();
  navigate('/');
};
