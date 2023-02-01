import {actions} from './index';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {
  getForecastWeather,
  getForecastWeatherByName,
  getForecastWeatherByNameWithDays,
  searchForLocation,
} from '../api';
import {AppDispatch, RootState} from '../../../store/configureStore';

const getAndroidPermissions = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location permission',
        message: 'We need you locale to show weather',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.warn(err);
    return false;
  }
};

const getGeoInfo: () => Promise<GeolocationResponse | undefined> = () =>
  new Promise(async resolve => {
    if (Platform.OS === 'ios') {
      Geolocation.getCurrentPosition(
        info => resolve(info),
        info => {
          resolve(undefined);
        },
      );
    } else {
      const permission = await getAndroidPermissions();
      if (permission) {
        Geolocation.getCurrentPosition(info => resolve(info));
      } else {
        resolve(undefined);
      }
    }
  });

export const getWeatherInfo = (numberOfDays: number) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const locationSelected = getState().days.locationSelected;

      if (locationSelected) {
        dispatch(actions.loadInfo());

        const data = await getForecastWeatherByNameWithDays(
          locationSelected,
          numberOfDays,
        );

        dispatch(actions.setWeatherInfo(data));
        return;
      }

      const location = await getGeoInfo();

      dispatch(actions.setLocationEnabled());

      if (location) {
        dispatch(actions.loadInfo());

        const data = await getForecastWeather(location, numberOfDays);

        dispatch(actions.setWeatherInfo(data));
      } else {
        dispatch(actions.setLocationDisabled());
      }
    } catch (err) {
      console.log(err);
      dispatch(actions.repoError(true));
    }
  };
};

export const getWeatherInfoByName = (name: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(actions.loadInfo());
      dispatch(actions.setLocation(name));

      const data = await getForecastWeatherByName(name);

      dispatch(actions.setWeatherInfo(data));
    } catch (err) {
      console.log(err);
      dispatch(actions.repoError(true));
    }
  };
};

export const getLocation = (text: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await searchForLocation(text);

      dispatch(actions.setSearchData(data));
    } catch (err) {
      console.log(err);
      dispatch(actions.repoError(true));
    }
  };
};
