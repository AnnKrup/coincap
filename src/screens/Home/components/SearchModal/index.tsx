import React, {FC, useCallback} from 'react';
import {View, Modal, Pressable, Text, TextInput} from 'react-native';
import debounce from 'lodash.debounce';
import {getLocation, getWeatherInfoByName} from '../../slice/thunks';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';

import {useStyles} from '../../../../hooks/useStyles';
import createStyles from './styles';

type Props = {
  modalVisible: boolean;
  closeModal: () => void;
};

const SearchModal: FC<Props> = ({modalVisible, closeModal}) => {
  const styles = useStyles(createStyles);

  const searchInfo = useAppSelector(state => state.days.searchData);

  const dispatch = useAppDispatch();

  const debounceSearch = debounce((searchString: string) => {
    if (searchString && searchString.length > 2) {
      dispatch(getLocation(searchString));
    }
  }, 400);

  const setLocation = useCallback((name: string) => {
    dispatch(getWeatherInfoByName(name));
  }, []);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => closeModal()}>
        <View style={styles.centeredView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => closeModal()}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
          <TextInput style={styles.input} onChangeText={debounceSearch} />
          {searchInfo.map(item => {
            return (
              <Pressable
                key={item.name}
                style={styles.item}
                onPress={() => {
                  setLocation(item.name);
                  closeModal();
                }}>
                <Text style={styles.text}>{item.name}</Text>
              </Pressable>
            );
          })}
        </View>
      </Modal>
    </>
  );
};

export default SearchModal;
