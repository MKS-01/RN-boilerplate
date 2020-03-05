import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '_scenes/login';
import SignUpScreen from '_scenes/signup';

const Stack = createStackNavigator();

function AuthNavigatorConfig() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

const AuthNavigator = AuthNavigatorConfig;

export default AuthNavigator;
