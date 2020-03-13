import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import { AuthProvider, useAuthValue } from '_store/auth-context';
import SplashScreen from '_scenes/splash';



export default function App() {
  // const state = useAuthValue();
  // const { value } = props.value
  // console.log("check state", sya);

  const states = {
    isLoading: false,
    userToken: null
  }


  // if (authContext.isLoading) {
  if (false) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <AuthProvider>

      <NavigationContainer>
        {states.userToken == null ? <AuthNavigator /> : <AppNavigator />}

      </NavigationContainer>
    </AuthProvider >
  );
}
