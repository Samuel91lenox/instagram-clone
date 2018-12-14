import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Add from './Add';
import Home from './Home';
import Search from './Search';
import Follow from './Follow';
import Profile from './Profile';

const RutasAutenticadas = createBottomTabNavigator({
  Home:{
    screen: Home,
  },
  Search: {
    screen:Search,
  },
  Add:{
    screen: Add,
  },
  Follow:{
    screen: Follow,
  },
  Profile:{
    screen: Profile,
  },
});

export { RutasAutenticadas };
