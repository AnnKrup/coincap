import {CustomTheme} from '../../../../context/ThemeContext';
import {StyleSheet} from 'react-native';

const createStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      paddingVertical: 20,
    },
    cityTitle: {
      color: theme.colors.text,
      fontSize: 20,
      fontWeight: '700',
    },
    date: {
      color: theme.colors.text,
      fontSize: 16,
      fontWeight: '500',
    },
    image: {
      width: 90,
      height: 90,
    },
    text: {
      color: theme.colors.text,
      lineHeight: 25,
      fontSize: 16,
    },
  });
};

export default createStyles;
