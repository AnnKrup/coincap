import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getCoins} from './slice/thunks';
import Card from './components/Card';
import {getCoinsArray} from './slice/selectors';

function Coins(): JSX.Element {
  const dispatch = useAppDispatch();
  const coins = useAppSelector(getCoinsArray);
  const [offSet, setOffSet] = useState(0);
  const limit = 20;

  useEffect(() => {
    dispatch(getCoins(offSet, limit));
  }, [offSet]);

  const getMoreCoins = () => {
    setOffSet(offSet + limit);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={coins}
        renderItem={({item}) => <Card coin={item} />}
        keyExtractor={item => item.id}
        onEndReached={() => {
          getMoreCoins();
        }}
      />
    </SafeAreaView>
  );
}

export default Coins;
