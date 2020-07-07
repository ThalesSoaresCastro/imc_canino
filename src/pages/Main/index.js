import React from 'react';

import {View, ScrollView} from 'react-native';
//import {Container} from './styles';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../components/Header';
import Forms from '../../components/Forms';

export default function Main(){
  return(
    <LinearGradient colors={['#020033','#04005c','#070095','#0900c7','#0b00c1']} style={{flex:1}}>
          <Header />
          <Forms />
    </LinearGradient>
  )
}
