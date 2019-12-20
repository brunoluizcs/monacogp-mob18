import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {withNavigation} from 'react-navigation';

const Item = ({item, navigation}) => {
  const handleNavigation = race => {
    console.log('RaceList.Item -> handleNavigation');
    navigation.navigate('RaceDetail', {race});
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          handleNavigation(item);
        }}>
        <Text>{item.raceName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(Item);