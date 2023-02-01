import {CustomTheme} from '../../../../context/ThemeContext';
import {StyleSheet} from 'react-native';

const createStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    dayWrapper: {
      backgroundColor: 'grey',
      paddingVertical: 10,
      paddingHorizontal: 6,
      alignItems: 'center',
      borderRadius: 10,
    },
    activeDayWrapper: {
      backgroundColor: 'grey',
      borderWidth: 1,
      borderColor: 'black',
      paddingVertical: 10,
      paddingHorizontal: 6,
      alignItems: 'center',
      borderRadius: 10,
    },
    title: {
      color: theme.colors.text,
      fontWeight: 'bold',
      lineHeight: 20,
    },
    text: {
      color: theme.colors.text,
    },
    image: {width: 50, height: 50},
  });
};

export default createStyles;
