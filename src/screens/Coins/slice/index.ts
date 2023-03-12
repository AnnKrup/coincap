import {createSlice} from '@reduxjs/toolkit';

export interface CoinsState {
  coins: any[];
  loading: boolean;
  error: boolean;
}

export const initialState: CoinsState = {
  coins: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    getCoins(state, action) {
      state.coins = state.coins.concat(action.payload.data);
      state.loading = false;
      state.error = false;
    },
    setLoading(state) {
      state.loading = true;
      state.error = false;
    },
    setError(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {actions, reducer} = slice;
