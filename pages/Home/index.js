import React, {Component, useState, useEffect} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { Font } from 'expo';


import Toolbar from '../../components/Toolbar'
import SeasonList from '../../components/SeasonList'
import Loader from '../../components/Loader';
import api, {servicesAPIs} from '../../services/api';
import {withNavigation} from 'react-navigation';

const Home = props => {  
  const [loading, setLoading] = useState(true);
  const [seasons, setSeasons] = useState([]);

  const getData = async () => {
    console.log('Requesting Seasons');
    const response = await api.get(servicesAPIs.seasonList);
    
    setSeasons(response.data.MRData.SeasonTable.Seasons);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
        <Toolbar title={'Temporadas'} hideBackButton={true}/>
        <Content>
          {loading == true ? <Loader loading={true} /> : <></>}
          <List>
            <SeasonList seasons={seasons} />
          </List>
        </Content>
      </Container>
  );
};

export default Home;