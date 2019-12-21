import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ListItem, Text} from 'native-base';

import {withNavigation} from 'react-navigation';
import { Font } from 'expo';

const Item = ({item, navigation}) => {
  const handleNavigation = race => {
    console.log('RaceList.Item -> handleNavigation');
    navigation.navigate('RaceDetail', {race});
  };

  return (
    <ListItem>
      <TouchableOpacity
        onPress={() => {
          handleNavigation(item);
        }}>
        <Text>{item.raceName}</Text>
      </TouchableOpacity>
    </ListItem>
  );
};

export default withNavigation(Item);