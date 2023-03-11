import {actions} from './index';
import {getCoinsArray} from '../api';
import {AppDispatch} from '../../../store/configureStore';

export const getCoins = (offSet: number, limit: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await getCoinsArray(offSet, limit);
      console.log('data', data);
      dispatch(actions.getCoins(data));
    } catch (err) {
      console.log(err);
    }
  };
};
