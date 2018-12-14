import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Add from './Add';
import { StackHome } from './StackHome';
import Search from './Search';
import Follow from './Follow';
import Profile from './Profile';

const RutasAutenticadas = createBottomTabNavigator({
  Home:{
    screen: StackHome,
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
},
{
  tabBarPosition: 'bottom',
}
);

export { RutasAutenticadas };
