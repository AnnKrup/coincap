import React, {FC} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {FutureWeatherInfo} from '../../slice/types';
import HourWeatherItem from '../HourWeatherItem';

type Props = {
  hours: FutureWeatherInfo[];
};

const HourWeatherList: FC<Props> = ({hours}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.wrapper}>
      {hours.map(item => {
        const time = new Date(item.time_epoch * 1000).getHours();
        return (
          <HourWeatherItem
            key={item.time_epoch}
            time={time}
            icon={item.condition.icon}
            temp_c={item.temp_c}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 20,
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderRadius: 10,
    paddingVertical: 10,
  },
});

export default HourWeatherList;
