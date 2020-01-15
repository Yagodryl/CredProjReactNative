import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';

const styles = StyleSheet.create({
    Image: {
        height: '100%', width: '100%', borderRadius: 50,
    },
    view: {
        position: 'absolute',
        backgroundColor: 'transparent',

    },
    button: {
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',

    }
});


const Scroller = ({ navigate, name }) => (
    
    <ScrollView horizontal={ true } style={ { backgroundColor: 'rgba(0,0,0,.5)' } }>
        <TouchableOpacity style={ styles.button } onPress={ () => navigate('ListMicroCredit') } >
            <Image style={ styles.Image } source={ require('../../Img/microcredit.jpg') } />
            <View style={ styles.view }>
                <Text style={ styles.text }>Мікропозики</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.button } onPress={ () => navigate('ListCredit') }  >
            <Image style={ styles.Image } source={ require('../../Img/credit.jpg') } />
            <View style={ styles.view }>
                <Text style={ styles.text }>Кредити</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.button } onPress={ () => navigate('ListCards') } >
            <Image style={ styles.Image } source={ require('../../Img/cards.jpg') } />
            <View style={ styles.view }>
                <Text style={ styles.text }>Кредитні картки</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button } onPress={ () => navigate('History') }  >
            <Image style={ styles.Image } source={ require('../../Img/history.jpeg') } />
            <View style={ styles.view }>
                <Text style={ styles.text }>Кредитна історія</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.button } onPress={ () => navigate('ListArticles') }  >
            <Image style={ styles.Image } source={ require('../../Img/articles.jpg') } />
            <View style={ styles.view }>
                <Text style={ styles.text }>Статті</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
)

export default Scroller;