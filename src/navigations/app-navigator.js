import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '_scenes/home';
import SettingsScreen from '_scenes/settings';

const Tab = createBottomTabNavigator();

function RootTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const AppNavigator = RootTabs;

export default AppNavigator;
