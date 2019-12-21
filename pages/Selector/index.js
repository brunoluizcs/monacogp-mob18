import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import Toolbar from '../../components/Toolbar';


export default ({navigation}) => {
  const season = navigation.getParam('season');

  const handleNavigation = (season,type) => {
    console.log('Selector -> handleNavigation');
    navigation.navigate('List', {season,type});
  };

  return (
    <>
    <Container>
        <Toolbar title={'Temporada -' + season.season} navigation={navigation} />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <TouchableOpacity
                    onPress={() => {
                      handleNavigation(season.season,"race");
                    }}>
                    <Text>Corridas</Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <TouchableOpacity
                  onPress={() => {
                    handleNavigation(season.season,"drive");
                  }}>
                  <Text>Pilotos </Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </>
  );
};
