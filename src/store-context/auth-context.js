import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {};
export const AuthContext = createContext(
    {
        isLoading: false,
        isSignout: true,
        userToken: null,
    }
);
