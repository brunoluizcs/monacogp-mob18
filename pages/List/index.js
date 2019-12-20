import React from 'react';
import {View, Text} from 'react-native';

import RaceList from '../../components/RaceList'
import DriveList from '../../components/DriverList'

export default ({navigation}) => {
  const season = navigation.getParam('season');
  const type = navigation.getParam('type');

  return (
    <>
      <View>
        <Text>Temporada - {season}</Text>
        {type == "race" ? <RaceList season={season} /> : <DriveList season={season}/>}
      </View>
    </>
  );
};