import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import {DARK_THEME, useTheme} from '../context/ThemeContext';
import {Image, StatusBar, StyleSheet} from 'react-native';

type MainTabRoutesParamList = {
  Home: undefined;
  Settings: undefined;
};

const Tabs = createBottomTabNavigator<MainTabRoutesParamList>();

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
  disabled: {
    opacity: 0.5,
  },
});

const MainNavigation: FC = () => {
  const {theme} = useTheme();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={theme === DARK_THEME ? 'light-content' : 'dark-content'}
      />
      <Tabs.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.mainBg,
          },
          tabBarLabelStyle: {
            color: theme.colors.text,
          },
        }}>
        <Tabs.Screen
          name={'Home'}
          component={Home}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  style={styles.image}
                  source={require('../assets/img/house-128.png')}
                />
              ) : (
                <Image
                  style={[styles.image, styles.disabled]}
                  source={require('../assets/img/house-128.png')}
                />
              ),
          }}
        />
        <Tabs.Screen
          name={'Settings'}
          component={Settings}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  style={styles.image}
                  source={require('../assets/img/settings-4-128.png')}
                />
              ) : (
                <Image
                  style={[styles.image, styles.disabled]}
                  source={require('../assets/img/settings-4-128.png')}
                />
              ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
