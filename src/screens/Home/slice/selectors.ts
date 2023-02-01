import {RootState} from '../../../store/configureStore';

export const selectWeatherInfo = (state: RootState) => state.days.weatherInfo;

export const selectSelectedDay = (state: RootState) => state.days.selectedDay;

export const selectLocationStatus = (state: RootState) =>
  state.days.locationDisabled && !state.days.locationSelected;

export const selectSearchData = (state: RootState) => state.days.searchData;
