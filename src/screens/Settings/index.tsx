import React, {FC} from 'react';

import {StyleSheet, View, Text, SafeAreaView, Switch} from 'react-native';
import {
  CustomTheme,
  DARK_THEME,
  LIGHT_THEME,
  useTheme,
} from '../../context/ThemeContext';
import {useStyles} from '../../hooks/useStyles';
import createStyles from './styles';

const Settings: FC = () => {
  const {setTheme, theme} = useTheme();
  const styles = useStyles(createStyles);

  return (
    <SafeAreaView style={styles.safeAreaStyles}>
      <View style={styles.wrapper}>
        <View style={styles.itemWrapper}>
          <Text style={styles.buttonText}>Light theme</Text>
          <Switch
            trackColor={{
              false: theme.colors.text,
              true: theme.colors.text,
            }}
            ios_backgroundColor={theme.colors.text}
            value={theme === LIGHT_THEME}
            onChange={() => {
              setTheme(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
