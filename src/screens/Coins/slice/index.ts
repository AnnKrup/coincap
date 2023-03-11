import {createSlice} from '@reduxjs/toolkit';

export interface CoinsState {
  coins: any[];
  loading: boolean;
}

export const initialState: CoinsState = {
  coins: [],
  loading: false,
};

const slice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    getCoins(state, action) {
      console.log('action', action);
      state.coins = state.coins.concat(action.payload.data);
    },
  },
});

export const {actions, reducer} = slice;
