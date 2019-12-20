import React from 'react';
import {View, Text} from 'react-native';

export default ({navigation}) => {
  const race = navigation.getParam('race');

  return (
    <>
      <View>
        <Text>Temporada - {race.season}</Text>
        <Text>Round - {race.round}</Text>
        <Text>Name - {race.raceName}</Text>
      </View>
    </>
  );
};