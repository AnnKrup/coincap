import {Dimensions, StyleSheet} from 'react-native';
import {CustomTheme} from '../../../../context/ThemeContext';

const createStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    centeredView: {
      height: Dimensions.get('window').height,
      backgroundColor: theme.colors.itemBg,
      padding: 20,
      paddingTop: 60,
    },
    input: {
      height: 50,
      padding: 12,
      backgroundColor: theme.colors.mainBg,
      borderRadius: 5,
      marginTop: 16,
    },
    item: {
      borderWidth: 1,
      borderRadius: 6,
      marginTop: 8,
      backgroundColor: 'white',
    },
    text: {
      padding: 8,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
};

export default createStyles;
