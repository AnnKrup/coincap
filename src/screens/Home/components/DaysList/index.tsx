import React, {FC, useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {ForecastItem} from '../../slice/types';
import SingeDay from './SingleDay';

type Props = {
  forecastday: ForecastItem[];
};

const DaysList: FC<Props> = ({forecastday}) => {
  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    setActiveDay(0);
  }, [forecastday]);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.wrapper}>
      {forecastday.map((item, index) => (
        <SingeDay
          key={item.date}
          forecastItem={item}
          dayNumber={index}
          activeDay={activeDay}
          setActiveDay={setActiveDay}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 16,
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  dayWrapper: {
    backgroundColor: 'grey',
    padding: 6,
    alignItems: 'center',
  },
  image: {width: 50, height: 50},
});

export default React.memo(DaysList);
