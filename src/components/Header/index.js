import React from 'react';
import {Container} from './styles';

import Lottie from 'lottie-react-native';

import doghappy from './../../../animations/4888-dog-icon.json';
import { View, Dimensions, StyleSheet } from 'react-native';

export default function Header(){
    return(
        <View style={styles.viewPrincipal}>
            <Lottie resizeMode="contain" autoSize source={doghappy} autoPlay loop={false}/>
        </View>
    );
}

const styles = StyleSheet.create({
    viewPrincipal:{
        height:Dimensions.get('window').height*0.25,
        width: Dimensions.get('window').width,
        alignItems:"center", 
        justifyContent:"center", 
        //backgroundColor:'white'
    }
});