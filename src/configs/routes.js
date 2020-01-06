import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home'
import Search from '../screens/Search'

const HomeNavigation = createStackNavigator({
  Home: Home,
  Search: Search
})

export const AppNavigator = createAppContainer(HomeNavigation);
