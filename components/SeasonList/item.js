import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ListItem} from 'native-base';

import {withNavigation} from 'react-navigation';
import { Font } from 'expo';

const Item = ({item, navigation}) => {
  const handleNavigation = season => {
    console.log('SeasonList.Item -> handleNavigation');
    navigation.navigate('Selector', {season});
  };

  return (
      <ListItem>
        <TouchableOpacity
          onPress={() => {
            handleNavigation(item);
          }}>
          <Text>{item.season}</Text>
        </TouchableOpacity>
      </ListItem>
    
  );
};

export default withNavigation(Item);