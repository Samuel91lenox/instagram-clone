import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Follow from './Follow';

const TabFollow = createMaterialTopTabNavigator({
  Follow:{
    screen: Follow,
  },
  Followers: {
    screen: Follow,
  },
});

export { TabFollow };
