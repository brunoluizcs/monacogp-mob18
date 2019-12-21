import React, {useState, useEffect} from 'react';
import {Text, FlatList} from 'react-native';

import Item from './item.js';
import api,{servicesAPIs} from '../../services/api';
import { Font } from 'expo';

const RaceList = props => {
  const [loading, setLoading] = useState(true);
  const [drives, setDrives] = useState([]);

  const {season} = props;

  const getData = async () => {
    const response = await api.get(servicesAPIs.driverList.replace('{0}',season));
    const drives = response.data.MRData.DriverTable.Drivers
    setDrives(drives);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <>
      <FlatList
        data={drives}
        keyExtractor={drive => `${drive.driverId}`}
        vertical
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => <Item item={item} itemIndex={index} />}
      />
    </>
  );
};

export default RaceList;