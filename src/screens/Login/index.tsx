import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '../../store/hooks';
import {actions} from './slice';

function Login() {
  const dispatch = useAppDispatch();

  const setLoginTrue = () => {
    dispatch(actions.setLogin());
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SafeAreaView />
      <TouchableOpacity onPress={() => setLoginTrue()}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
