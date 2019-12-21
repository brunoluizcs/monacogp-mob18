import React from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import Toolbar from '../../components/Toolbar'


export default ({navigation}) => {
  const race = navigation.getParam('race');

  return (
    <>
      <Container>
        <Toolbar title={race.raceName} navigation={navigation}/>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>{race.raceName} {race.season}</Text>           
                <Text>Round - {race.round}</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>{'Circuito'}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{race.Circuit.circuitName}</Text>
                <Text>Localização: {race.Circuit.Location.locality} {race.Circuit.Location.country}</Text>
                <Text>Latitude: {race.Circuit.Location.lat}</Text>
                <Text>Longitude: {race.Circuit.Location.long}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </>
  );
};