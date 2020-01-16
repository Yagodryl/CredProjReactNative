import React, { Component } from 'react';

import { Image, Divider, Button } from 'react-native-elements';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    textTitle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',

        marginTop: 15,
        marginBottom: 15
        
    },
    container: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(0,0,0,.7)', height: '100%',

    },
    text: {
        fontSize: 18,
        color: 'white',
        
        marginBottom: 15
        
    },

});

const CreditInfoScreenForm = ({ id, title, text }) => (
    <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('../../Img/articles.jpg') }>
        <ScrollView style={ styles.container }>
            <Text style={ styles.textTitle }>{ title }</Text>
            <Text style={styles.text}>
                { text }
            </Text>
        </ScrollView>
    </ImageBackground>


)
export default CreditInfoScreenForm;