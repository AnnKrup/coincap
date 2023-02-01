import {CustomTheme} from '../../context/ThemeContext';
import {StyleSheet} from 'react-native';

const createStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    safeAreaStyles: {
      backgroundColor: theme.colors.mainBg,
    },
    wrapper: {
      height: '100%',
      backgroundColor: theme.colors.mainBg,
    },
    disabledLocationWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.mainBg,
    },
    disabledLocationText: {
      color: theme.colors.text,
    },
    loadingWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      borderRadius: 8,
      padding: 10,
      elevation: 2,
      marginHorizontal: 20,
      marginTop: 16,
    },
    buttonOpen: {
      backgroundColor: theme.colors.itemBg,
    },
  });
};

export default createStyles;
