import React, {useState, useEffect} from 'react';
import {Text, FlatList} from 'react-native';

import Item from './item.js';
import api,{servicesAPIs} from '../../services/api';
import { Font } from 'expo';

const RaceList = props => {
  const [loading, setLoading] = useState(true);
  const [races, setRaces] = useState([]);

  const {season} = props;

  const getData = async () => {
    const response = await api.get(servicesAPIs.raceList.replace('{0}',season));
    const races = response.data.MRData.RaceTable.Races
    setRaces(races);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>
      <FlatList
        data={races}
        keyExtractor={race => `${race.round}`}
        vertical
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => <Item item={item} itemIndex={index} />}
      />
    </>
  );
};

export default RaceList;