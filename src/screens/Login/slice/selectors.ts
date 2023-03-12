import {RootState} from '../../../store/configureStore';

export const selectLogin = (state: RootState) => state.login.login;
