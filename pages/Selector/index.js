import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


export default ({navigation}) => {
  const season = navigation.getParam('season');

  const handleNavigation = (season,type) => {
    console.log('Selector -> handleNavigation');
    navigation.navigate('List', {season,type});
  };

  return (
    <>
      <View>
        <Text>Temporada - {season.season}</Text>

        <TouchableOpacity
          onPress={() => {
            handleNavigation(season.season,"race");
          }}>
          <Text>Corridas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleNavigation(season.season,"drive");
          }}>
          <Text>Pilotos </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
