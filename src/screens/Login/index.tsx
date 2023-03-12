import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '../../store/hooks';
import {actions} from './slice';
import {useStyles} from '../../hooks/useStyles';
import createStyles from './styles';

function Login() {
  const dispatch = useAppDispatch();
  const styles = useStyles(createStyles);

  const setLoginTrue = () => {
    dispatch(actions.setLogin());
  };

  return (
    <View style={styles.wrapper}>
      <SafeAreaView />
      <TouchableOpacity onPress={() => setLoginTrue()}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
