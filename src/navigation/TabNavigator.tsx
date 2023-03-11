import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Coins from '../screens/Coins';

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Coins" component={Coins} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
