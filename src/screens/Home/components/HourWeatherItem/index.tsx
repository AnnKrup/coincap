import React, {FC, useMemo} from 'react';
import {Text, View, Image} from 'react-native';
import {useStyles} from '../../../../hooks/useStyles';
import createStyles from './styles';

type Props = {
  time: number;
  icon: string;
  temp_c: number;
};

const HourWeatherItem: FC<Props> = ({time, icon, temp_c}) => {
  const styles = useStyles(createStyles);
  const source = useMemo(() => {
    return {
      uri: `https:${icon}`,
    };
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{time}</Text>
      <Image style={styles.image} source={source} />
      <Text style={styles.text}>{temp_c}°</Text>
    </View>
  );
};

export default React.memo(HourWeatherItem);
