import axios, {AxiosResponse} from 'axios';
import {WEATHER_API_DOMAIN, WEATHER_API_KEY} from '../../constants';
import {GeolocationResponse} from '@react-native-community/geolocation';
import {DayInfo, SearchLocation} from './slice/types';

export const getForecastWeather = async (
  {coords}: GeolocationResponse,
  numberOfDays: number,
) => {
  const {data}: AxiosResponse<DayInfo> = await axios.get(
    `${WEATHER_API_DOMAIN}/forecast.json?key=${WEATHER_API_KEY}&q=${coords.latitude},${coords.longitude}&days=${numberOfDays}&aqi=no&alerts=no`,
  );
  return data;
};

export const getForecastWeatherByName = async (name: string) => {
  const {data}: AxiosResponse<DayInfo> = await axios.get(
    `${WEATHER_API_DOMAIN}/forecast.json?key=${WEATHER_API_KEY}&q=${name}`,
  );
  return data;
};

export const getForecastWeatherByNameWithDays = async (
  name: string,
  numberOfDays: number,
) => {
  const {data}: AxiosResponse<DayInfo> = await axios.get(
    `${WEATHER_API_DOMAIN}/forecast.json?key=${WEATHER_API_KEY}&q=${name}&days=${numberOfDays}&aqi=no&alerts=no`,
  );
  return data;
};

export const searchForLocation = async (text: string) => {
  const {data}: AxiosResponse<SearchLocation[]> = await axios.get(
    `${WEATHER_API_DOMAIN}/search.json?key=${WEATHER_API_KEY}&q=${text}`,
  );
  return data;
};
