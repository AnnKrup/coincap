import axios, {AxiosResponse} from 'axios';
import {WEATHER_API_DOMAIN, WEATHER_API_KEY} from '../../constants';
import {GeolocationResponse} from '@react-native-community/geolocation';

export const getForecastWeather = async (
  {coords}: GeolocationResponse,
  numberOfDays: number,
) => {
  // const {data}: AxiosResponse<DayInfo> = await axios.get(
  //   `${WEATHER_API_DOMAIN}/forecast.json?key=${WEATHER_API_KEY}&q=${coords.latitude},${coords.longitude}&days=${numberOfDays}&aqi=no&alerts=no`,
  // );
  // return data;
};
