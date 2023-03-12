import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Coins from '../screens/Coins';
import {COINS} from '../constants';

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={COINS} component={Coins} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
