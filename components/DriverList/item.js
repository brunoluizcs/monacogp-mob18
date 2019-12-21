import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ListItem, Text} from 'native-base';
import { Font } from 'expo';


import {withNavigation} from 'react-navigation';

const Item = ({item, navigation}) => {
  const handleNavigation = driver => {
    console.log('DriverList.Item -> handleNavigation');
    navigation.navigate('DriverDetail', {driver});
  };

  return (
    <ListItem>
      <TouchableOpacity
        onPress={() => {
          handleNavigation(item);
        }}>
        <Text>{item.givenName} {item.familyName}</Text>
      </TouchableOpacity>
    </ListItem>
  );
};

export default withNavigation(Item);