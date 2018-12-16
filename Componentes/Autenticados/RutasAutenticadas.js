import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Add from './Add';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import { StackFollow } from './StackFollow';
import Profile from './Profile';

const RutasAutenticadas = createBottomTabNavigator({
  Home:{
    screen: StackHome,
  },
  Search: {
    screen:StackSearch,
  },
  Add:{
    screen: Add,
  },
  Follow:{
    screen: StackFollow,
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
