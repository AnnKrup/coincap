import React, {FC, useMemo} from 'react';

import {Text, View, Image} from 'react-native';
import {CurrentWeatherInfo, ForecastItem, Location} from '../../slice/types';
import {useStyles} from '../../../../hooks/useStyles';
import {DAYS} from '../../../../constants';
import createStyles from './styles';

type Props = {
  location: Location;
  currentWeather?: CurrentWeatherInfo;
  generalWeather?: ForecastItem;
};

const CityHeader: FC<Props> = ({location, currentWeather, generalWeather}) => {
  const weather = currentWeather || generalWeather?.day;
  const styles = useStyles(createStyles);

  const source = useMemo(() => {
    return weather
      ? {
          uri: `https:${weather.condition.icon}`,
        }
      : undefined;
  }, [weather]);

  const currentDate = useMemo(() => {
    if (!currentWeather) {
      return;
    }

    const date = new Date(currentWeather.last_updated_epoch * 1000);
    return {
      date: date.toLocaleDateString(),
      weekDay: DAYS[date.getDay()],
    };
  }, [currentWeather]);

  const forecastDate = useMemo(() => {
    if (!generalWeather) {
      return;
    }

    const date = new Date(generalWeather.date);
    return {
      date: date.toLocaleDateString(),
      weekDay: DAYS[date.getDay()],
    };
  }, [generalWeather]);

  if (!weather || !source) {
    return <View />;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.cityTitle}>{location.name}</Text>
      {currentWeather && (
        <Text
          style={
            styles.date
          }>{`${currentDate?.weekDay} ${currentDate?.date}`}</Text>
      )}
      {generalWeather && (
        <Text
          style={
            styles.date
          }>{`${forecastDate?.weekDay} ${forecastDate?.date}`}</Text>
      )}
      <Image style={styles.image} source={source} />
      {currentWeather && (
        <Text style={styles.text}>{currentWeather.temp_c}° C</Text>
      )}
      {generalWeather && (
        <Text style={styles.text}>{generalWeather.day.avgtemp_c}° C</Text>
      )}
      <Text style={styles.text}>{weather.condition.text}</Text>
      {currentWeather && (
        <Text style={styles.text}>Humidity: {currentWeather.humidity}%</Text>
      )}
      {generalWeather && (
        <Text style={styles.text}>
          Humidity: {generalWeather.day.avghumidity}%
        </Text>
      )}
    </View>
  );
};

export default React.memo(CityHeader);
