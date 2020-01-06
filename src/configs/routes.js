import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import BottomNavigation from '../components/BottomTabNavigation';

import Home from '../screens/Home'
import Search from '../screens/Search'

const HomeNavigation = createStackNavigator({
  Home: Home,
  Search: Search
}, {
  headerMode: 'none',
})

const HomeBottomNavigation = createBottomTabNavigator({
  Home: Home,
  Search: Search,
}, {
  tabBarComponent: BottomNavigation
})

export const AppNavigator = createAppContainer(HomeBottomNavigation);
