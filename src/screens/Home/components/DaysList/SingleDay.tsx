import React, {FC, useCallback, useMemo} from 'react';
import {Image, Text, Pressable} from 'react-native';

import {DAYS} from '../../../../constants';
import {ForecastItem} from '../../slice/types';
import {useAppDispatch} from '../../../../store/hooks';
import {actions} from '../../slice';
import {useStyles} from '../../../../hooks/useStyles';
import createStyles from './styles';

type Props = {
  forecastItem: ForecastItem;
  dayNumber: number;
  activeDay: number;
  setActiveDay: (arg0: number) => void;
};

const SingeDay: FC<Props> = ({
  forecastItem,
  dayNumber,
  activeDay,
  setActiveDay,
}) => {
  const styles = useStyles(createStyles);
  const dispatch = useAppDispatch();
  const date = useMemo(() => new Date(forecastItem.date), [forecastItem.date]);
  const source = useMemo(
    () => ({
      uri: `https:${forecastItem.day.condition.icon}`,
    }),
    [forecastItem.date],
  );

  const changeSelectedDay = useCallback(() => {
    setActiveDay(dayNumber);
    dispatch(actions.setSelectedDay(dayNumber));
  }, []);

  return (
    <Pressable
      style={
        activeDay === dayNumber ? styles.activeDayWrapper : styles.dayWrapper
      }
      onPress={changeSelectedDay}>
      <Text style={styles.title}>{DAYS[date.getDay()]}</Text>
      <Text style={styles.text}>{date.toLocaleDateString()}</Text>
      <Image style={styles.image} source={source} />
      <Text style={styles.text}>{forecastItem.day.avgtemp_c}°</Text>
    </Pressable>
  );
};

export default React.memo(SingeDay);
