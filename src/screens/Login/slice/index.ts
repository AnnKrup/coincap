import {createSlice} from '@reduxjs/toolkit';

export interface LoginState {
  login: boolean;
}

export const initialState: LoginState = {
  login: false,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin(state) {
      state.login = true;
    },
  },
});

export const {actions, reducer} = slice;
