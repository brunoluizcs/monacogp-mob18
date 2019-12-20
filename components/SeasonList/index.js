import React, {useState, useEffect} from 'react';
import {Text, FlatList} from 'react-native';

import Item from './Item';

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