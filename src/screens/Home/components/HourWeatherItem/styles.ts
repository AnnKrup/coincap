import {CustomTheme} from '../../../../context/ThemeContext';
import {StyleSheet} from 'react-native';

const createStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    wrapper: {alignItems: 'center'},
    image: {width: 50, height: 50},
    text: {
      color: theme.colors.text,
    },
  });
};

export default createStyles;
