import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {withNavigation} from 'react-navigation';

const Item = ({item, navigation}) => {
  const handleNavigation = driver => {
    console.log('DriverList.Item -> handleNavigation');
    navigation.navigate('DriverDetail', {driver});
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          handleNavigation(item);
        }}>
        <Text>{item.givenName} {item.familyName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(Item);