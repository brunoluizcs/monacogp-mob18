import React, {useState, useEffect} from 'react';
import {Text, FlatList} from 'react-native';

import Item from './item.js';
import { Font } from 'expo';

const SeasonList = props => {
  
  const {seasons} = props;

  return (
    <>
      <FlatList
        data={seasons}
        keyExtractor={season => `${season.season}`}
        vertical
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => <Item item={item} itemIndex={index} />}
      />
    </>
  );
};

export default SeasonList;