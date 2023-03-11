import {RootState} from '../../../store/configureStore';

export const getCoinsArray = (state: RootState) => state.coins.coins;
