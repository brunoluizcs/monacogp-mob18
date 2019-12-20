import React from 'react';
import {View, Text} from 'react-native';

export default ({navigation}) => {
  const driver = navigation.getParam('driver');

  return (
    <>
      <View>
        <Text>Nome - {driver.givenName} {driver.familyName}</Text>
        <Text>Data de Nascimento - {driver.dateOfBirth}</Text>
        <Text>Nacionalidade - {driver.nationality}</Text>
      </View>
    </>
  );
};