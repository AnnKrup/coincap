import {CustomTheme} from '../../context/ThemeContext';
import {StyleSheet} from 'react-native';

const createStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    wrapper: {
      height: '100%',
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: theme.colors.mainBg,
    },
    itemWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
    },
    safeAreaStyles: {
      backgroundColor: theme.colors.mainBg,
    },
    buttonText: {
      color: theme.colors.text,
    },
  });
};

export default createStyles;
