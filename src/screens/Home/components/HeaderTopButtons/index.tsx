import React, {FC, useEffect, useState} from 'react';

import {Pressable, View, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {getWeatherInfo} from '../../slice/thunks';
import {useStyles} from '../../../../hooks/useStyles';
import createStyles from './styles';
import {selectLocation} from '../../slice/selectors';

const HeaderTopButtons: FC = () => {
  const dispatch = useAppDispatch();
  const styles = useStyles(createStyles);

  const location = useAppSelector(selectLocation);
  const [activeTab, sutActiveTab] = useState(0);

  useEffect(() => {
    sutActiveTab(0);
  }, [location]);

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={() => {
          sutActiveTab(0);
          dispatch(getWeatherInfo(1));
        }}>
        <Text style={[styles.text, activeTab === 0 && styles.activeTab]}>
          Current day
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          sutActiveTab(1);
          dispatch(getWeatherInfo(3));
        }}>
        <Text style={[styles.text, activeTab === 1 && styles.activeTab]}>
          Next 3 days
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          sutActiveTab(2);
          dispatch(getWeatherInfo(7));
        }}>
        <Text style={[styles.text, activeTab === 2 && styles.activeTab]}>
          Next week
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          sutActiveTab(3);
          dispatch(getWeatherInfo(14));
        }}>
        <Text style={[styles.text, activeTab === 3 && styles.activeTab]}>
          Next 2 weeks
        </Text>
      </Pressable>
    </View>
  );
};

export default HeaderTopButtons;
