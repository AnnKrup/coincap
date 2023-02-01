import {CustomTheme} from '../../../../context/ThemeContext';
import {StyleSheet} from 'react-native';

const createStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    wrapper: {
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      flexDirection: 'row',
      marginTop: 16,
    },
    activeTab: {
      fontWeight: 'bold',
    },
    text: {
      color: theme.colors.text,
    },
  });
};

export default createStyles;
