import React from 'react';
import {TouchableOpacity} from 'react-native'
import {Header, Left, Body, Button, Icon, Title } from 'native-base';
import {withNavigation} from 'react-navigation';
import { Font } from 'expo';


const Toolbar = ({title,hideBackButton, navigation})  => {

  return (
    <>
    <Header> 
            <Left>
                { 
                    !hideBackButton ?  
                        <Button transparent
                            onPress={() => {
                                navigation.navigate('Home');
                            }}>
                            <Icon name='arrow-back' />
                        </Button> 
                    
                        
                    : <></>
                }
            </Left>        
        <Body>
            <Title>{title}</Title>
        </Body>
    </Header>
    </>
  );
};

export default Toolbar;