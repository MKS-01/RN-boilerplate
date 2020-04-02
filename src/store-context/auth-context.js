import React, { createContext, useContext } from 'react';

export const AuthContext = createContext();

export const useAuthValue = () => useContext(AuthContext);