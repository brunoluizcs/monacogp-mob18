import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {withNavigation} from 'react-navigation';

const Item = ({item, navigation}) => {
  const handleNavigation = season => {
    console.log('SeasonList.Item -> handleNavigation');
    navigation.navigate('Selector', {season});
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          handleNavigation(item);
        }}>
        <Text>{item.season}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(Item);