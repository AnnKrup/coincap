import React, {FC} from 'react';

import {Pressable, View, Text} from 'react-native';
import {useAppDispatch} from '../../../../store/hooks';
import {getWeatherInfo} from '../../slice/thunks';
import {useStyles} from '../../../../hooks/useStyles';
import createStyles from './styles';

type Props = {
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

const HeaderTopButtons: FC<Props> = ({activeTab, setActiveTab}) => {
  const dispatch = useAppDispatch();
  const styles = useStyles(createStyles);

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={() => {
          setActiveTab(0);
          dispatch(getWeatherInfo(1));
        }}>
        <Text style={[styles.text, activeTab === 0 && styles.activeTab]}>
          Current day
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setActiveTab(1);
          dispatch(getWeatherInfo(3));
        }}>
        <Text style={[styles.text, activeTab === 1 && styles.activeTab]}>
          Next 3 days
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setActiveTab(2);
          dispatch(getWeatherInfo(7));
        }}>
        <Text style={[styles.text, activeTab === 2 && styles.activeTab]}>
          Next week
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setActiveTab(3);
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
