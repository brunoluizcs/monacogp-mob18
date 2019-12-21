import React from 'react';
import { Container, Content, List, Text } from 'native-base';

import RaceList from '../../components/RaceList'
import DriveList from '../../components/DriverList'

import Toolbar from '../../components/Toolbar'
import { Font } from 'expo';


export default ({navigation}) => {
  const season = navigation.getParam('season');
  const type = navigation.getParam('type');

  return (
    <>
      <Container>
        {type == "race" ? <Toolbar title={'Corridas de ' + season}  navigation={navigation}/> : <Toolbar title={'Pilotos de ' + season}  navigation={navigation}/>}
        <Content>
          <List>
            {type == "race" ? <RaceList season={season} /> : <DriveList season={season}/>}
          </List>
        </Content>
      </Container>
    </>
  );
};