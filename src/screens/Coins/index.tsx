import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, ActivityIndicator, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getCoins} from './slice/thunks';
import Card from './components/Card';
import {getCoinsArray, isLoading} from './slice/selectors';
import {useStyles} from '../../hooks/useStyles';
import createStyles from './styles';

const limit = 20;

function Coins(): JSX.Element {
  const dispatch = useAppDispatch();
  const coins = useAppSelector(getCoinsArray);
  const loading = useAppSelector(isLoading);
  const [offSet, setOffSet] = useState(0);
  const styles = useStyles(createStyles);

  useEffect(() => {
    dispatch(getCoins(offSet, limit));
  }, [offSet]);

  const getMoreCoins = () => {
    setOffSet(offSet + limit);
  };

  return (
    <SafeAreaView>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={coins}
          renderItem={({item}) => <Card coin={item} />}
          keyExtractor={item => item.id}
          onEndReached={() => {
            getMoreCoins();
          }}
        />
      )}
    </SafeAreaView>
  );
}

export default Coins;
