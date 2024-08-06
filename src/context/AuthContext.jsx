// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component that wraps the app and provides auth state
export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    // Retrieve the token from localStorage, if available
    const token = localStorage.getItem('authToken');
    return token ? { token } : null;
  });

  // Set the token in localStorage and state
  const saveAuthData = (token) => {
    localStorage.setItem('authToken', token);
    setAuthData({ token });
  };

  // Remove the token from localStorage and state
  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthData(null);
  };

  // Provide the auth state and actions to children components
  return (
    <AuthContext.Provider value={{ authData, setAuthData: saveAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
