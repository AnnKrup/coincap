import {actions} from './index';
import {getCoinsArray} from '../api';
import {AppDispatch} from '../../../store/configureStore';

export const getCoins = (offSet: number, limit: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(actions.setLoading());

    try {
      const data = await getCoinsArray(offSet, limit);
      dispatch(actions.getCoins(data));
    } catch (err) {
      console.log(err);
      dispatch(actions.setError());
    }
  };
};
