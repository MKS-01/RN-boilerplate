import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';
import SettingsScreen from '_scenes/settings';
// import Icons from 'react-native-vector-icons/Ionicons';
import { GRAY_DARK } from '_styles/colors';
// import { ThemeProvider } from 'styled-components';
// import { theme } from '_styles/theme';

const Tab = createBottomTabNavigator();

function RootTabs() {
  return (
    // <ThemeProvider theme={theme}>
    <Tab.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;

    //     if (route.name === 'Home') {
    //       iconName = focused ? 'ios-home' : 'ios-home';
    //     } else if (route.name === 'Assets') {
    //       iconName = focused ? 'ios-bookmark' : 'ios-bookmark';
    //     } else if (route.name === 'Search') {
    //       iconName = focused ? 'ios-search' : 'ios-search';
    //     } else if (route.name === 'Calendar') {
    //       iconName = focused ? 'ios-calendar' : 'ios-calendar';
    //     } else if (route.name === 'Settings') {
    //       iconName = focused ? 'ios-settings' : 'ios-settings';
    //     }

    //     return <Icons name={iconName} size={size} color={color} />;
    //   },
    // })}
    // tabBarOptions={{
    //   activeTintColor: '#3373fa',
    //   inactiveTintColor: GRAY_DARK,
    // }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    // </ThemeProvider>
  );
}

const AppNavigator = RootTabs;

export default AppNavigator;
