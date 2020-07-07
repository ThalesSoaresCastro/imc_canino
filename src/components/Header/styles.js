import styled from 'styled-components/native';
import { View, Dimensions } from 'react-native';
import React from 'react';


export const Container = styled.View`
    height:Dimensions.get('window').height*0.30;
    width: Dimensions.get('window').width;
    alignItems:"center"; 
    justifyContent:"center"; 
    backgroundColor:"white";
    elevation:0,
`;
