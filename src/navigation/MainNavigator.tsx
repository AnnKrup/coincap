import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import TabNavigator from './TabNavigator';
import {useAppSelector} from '../store/hooks';
import {selectLogin} from '../screens/Login/slice/selectors';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  const login = useAppSelector(selectLogin);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!login && <Stack.Screen name="Login" component={Login} />}
        {login && <Stack.Screen name="Tabs" component={TabNavigator} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
