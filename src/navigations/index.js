// import * as React from 'react';
import React, { createContext, useContext, useEffect, useMemo, useReducer, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import { useAuthValue, AuthContext } from '_store/auth-context';
import SplashScreen from '_scenes/splash';

import { storeData, retriveData, removeValue } from '_utils/LocalStorage'



export default function App({ }) {

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      // try {
      //   userToken = await AsyncStorage.getItem('userToken');

      //   console.log('token Check', userToken);
      // } catch (e) {
      //   // Restoring token failed
      // }
      userToken = await retriveData('userToken');
      console.log('token Check', userToken);

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async data => {

        console.log("sign in........")
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        storeData('userToken', 'dummy-auth-token');
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => {
        dispatch({ type: 'SIGN_OUT' })
        removeValue('userToken')
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    [],
  );



  return (
    <AuthContext.Provider value={authContext} >
      <NavigationContainer>
        {state.isLoading ? (
          <SplashScreen />
        ) : state.userToken == null ?
            <AuthNavigator />
            :
            <AppNavigator />
        }
      </NavigationContainer>
    </AuthContext.Provider >
  )


}


