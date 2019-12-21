import React from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import Toolbar from '../../components/Toolbar'


export default ({navigation}) => {
  const driver = navigation.getParam('driver');

  return (
    <>
      <Container>
        <Toolbar title={driver.familyName} navigation={navigation} />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>Nome - {driver.givenName} {driver.familyName}</Text>
                <Text>Data de Nascimento - {driver.dateOfBirth}</Text>
                <Text>Nacionalidade - {driver.nationality}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
      
    </>
  );
};