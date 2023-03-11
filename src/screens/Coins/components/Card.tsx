import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {CoinProps} from '../slice/types';

const Card: FC<CoinProps> = ({coin}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'lightblue',
        padding: 20,
        justifyContent: 'space-between',
      }}>
      <Text>{coin.rank}</Text>
      <Text>{coin.name}</Text>
      <Text>{coin.priceUsd}</Text>
    </View>
  );
};

export default Card;
