import {StyleSheet} from 'react-native';

const createStyles = () => {
  return StyleSheet.create({
    card: {
      flexDirection: 'row',
      margin: 10,
      backgroundColor: 'lightblue',
      padding: 20,
      justifyContent: 'space-between',
    },
  });
};

export default createStyles;
