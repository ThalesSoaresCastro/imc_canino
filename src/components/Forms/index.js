import React from 'react';
import {Container, FormTextAltura, FormTextPeso} from './styles';
import { TextInput, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';

export default function Header(){
    return(
        <Container>
            <FormTextAltura />
            <FormTextPeso />

            <TouchableOpacity
                style={styles.Button}
            >
                <Text
                    style={styles.textButton}
                >
                    Calcular
                </Text>
            </TouchableOpacity>
        </Container>
    );
}

const styles = StyleSheet.create({
    Button: {
        height: Dimensions.get('window').height*0.05,
        backgroundColor:'#e62b00',
        textAlign:'center',
        borderRadius:12,
        justifyContent:'center',
        marginTop:Dimensions.get('window').height*0.30
    },
    textButton:{
        textAlign:'center', 
        justifyContent:'center',
        fontSize:16,
        fontWeight:'bold',
        color:'white'
    }
})