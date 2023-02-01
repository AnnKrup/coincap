import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  Text,
} from 'react-native';
import CityHeader from './components/CityHeader';
import HourWeatherList from './components/HourWeatherList';
import {getWeatherInfo} from './slice/thunks';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import HeaderTopButtons from './components/HeaderTopButtons';
import DaysList from './components/DaysList';
import {useStyles} from '../../hooks/useStyles';
import {
  selectLocationStatus,
  selectSelectedDay,
  selectWeatherInfo,
} from './slice/selectors';
import createStyles from './styles';
import SearchModal from './components/SearchModal';
import {actions} from './slice';

function Home(): JSX.Element {
  const styles = useStyles(createStyles);

  const weatherInfo = useAppSelector(selectWeatherInfo);
  const selectedDay = useAppSelector(selectSelectedDay);
  const isLocationDisabled = useAppSelector(selectLocationStatus);

  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const loadMyLocationWeatherInfo = useCallback(() => {
    setActiveTab(0);
    dispatch(actions.clearLocation());
    dispatch(getWeatherInfo(1));
  }, []);

  useEffect(() => {
    dispatch(getWeatherInfo(1));
  }, []);

  const onlyOneDay = useMemo(() => {
    return weatherInfo?.forecast.forecastday.length === 1;
  }, [weatherInfo]);

  if (isLocationDisabled) {
    return (
      <View style={styles.disabledLocationWrapper}>
        <Text style={styles.disabledLocationText}>Location is disabled</Text>
        <SearchModal
          modalVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
        />
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Search for location</Text>
        </Pressable>
      </View>
    );
  }

  if (!weatherInfo || selectedDay === undefined) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaStyles}>
      <ScrollView style={styles.wrapper}>
        <View>
          <HeaderTopButtons activeTab={activeTab} setActiveTab={setActiveTab} />
          {!onlyOneDay && (
            <DaysList forecastday={weatherInfo.forecast.forecastday} />
          )}
          <CityHeader
            location={weatherInfo.location}
            currentWeather={selectedDay === 0 ? weatherInfo.current : undefined}
            generalWeather={
              selectedDay !== 0
                ? weatherInfo.forecast.forecastday[selectedDay]
                : undefined
            }
          />
        </View>
        <HourWeatherList
          hours={weatherInfo.forecast.forecastday[selectedDay].hour}
        />
        <SearchModal
          modalVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
        />
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Search for location</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={loadMyLocationWeatherInfo}>
          <Text style={styles.textStyle}>Load your geo position</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
