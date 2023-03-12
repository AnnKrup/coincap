import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {CoinProps} from '../slice/types';
import {useStyles} from '../../../hooks/useStyles';
import createStyles from './styles';

const Card: FC<CoinProps> = ({coin}) => {
  const styles = useStyles(createStyles);

  return (
    <View style={styles.card}>
      <Text>{coin.rank}</Text>
      <Text>{coin.name}</Text>
      <Text>{coin.priceUsd}</Text>
    </View>
  );
};

export default Card;
