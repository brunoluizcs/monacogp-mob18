import React, {Component, useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';

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
    <SafeAreaView>
      <ScrollView>
        {loading == true ? <Loader loading={true} /> : <></>}
        <SeasonList seasons={seasons} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;