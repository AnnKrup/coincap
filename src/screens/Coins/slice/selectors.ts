import {RootState} from '../../../store/configureStore';

export const getCoinsArray = (state: RootState) => state.coins.coins;
export const isLoading = (state: RootState) => state.coins.loading;
