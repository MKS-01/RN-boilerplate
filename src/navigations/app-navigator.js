import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '_scenes/home';
import FeedScreen from '_scenes/home/feed';
import StoryScreen from '_scenes/home/story';
import AboutScreen from '_scenes/about';
import SettingsScreen from '_scenes/settings';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function RootTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function Home() {
  return (
    <HomeStack.Navigator initialRouteName="Feed" headerMode="none">
      <HomeStack.Screen name="Feed" component={FeedScreen} />
      <HomeStack.Screen name="Story" component={StoryScreen} />
    </HomeStack.Navigator>
  );
}

const AppNavigator = RootTabs;

export default AppNavigator;
