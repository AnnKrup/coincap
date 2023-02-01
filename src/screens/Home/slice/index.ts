import {PayloadAction} from '@reduxjs/toolkit';

import {createSlice} from '@reduxjs/toolkit';
import {DayInfo, SearchLocation} from './types';

export interface HomeState {
  weatherInfo: DayInfo | undefined;
  selectedDay: number | undefined;
  searchData: SearchLocation[];
  locationDisabled: boolean;
  locationSelected: string | undefined;
  loading: boolean;
  error: any;
}

export const initialState: HomeState = {
  weatherInfo: undefined,
  selectedDay: undefined,
  searchData: [],
  locationDisabled: false,
  locationSelected: undefined,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    loadInfo(state) {
      state.loading = true;
      state.error = null;
    },
    setWeatherInfo(state, action: PayloadAction<DayInfo>) {
      state.weatherInfo = action.payload;
      state.selectedDay = 0;
      state.loading = false;
    },
    setSearchData(state, action: PayloadAction<SearchLocation[]>) {
      state.searchData = action.payload;
    },
    setSelectedDay(state, action) {
      state.selectedDay = action.payload;
    },
    setLocationDisabled(state) {
      state.locationDisabled = true;
    },
    setLocationEnabled(state) {
      state.locationDisabled = false;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.locationSelected = action.payload;
    },
    clearLocation(state) {
      state.locationSelected = undefined;
    },
    repoError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {actions, reducer} = slice;
