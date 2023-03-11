import {reducer as daysReducer} from '../screens/Home/slice';
import {reducer as loginReducer} from '../screens/Login/slice';
import {reducer as coinsReducer} from '../screens/Coins/slice';

export const rootReducer = {
  days: daysReducer,
  login: loginReducer,
  coins: coinsReducer,
};
