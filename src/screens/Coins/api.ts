import axios from 'axios';
import {COINS_API_DOMAIN} from '../../constants';

export const getCoinsArray = async (offSet: number, limit: number) => {
  const {data} = await axios.get(
    `${COINS_API_DOMAIN}assets?offset=${offSet}&limit=${limit}`,
  );
  return data;
};
