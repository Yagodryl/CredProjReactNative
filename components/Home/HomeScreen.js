import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground, Alert } from 'react-native';
import PropTypes from "prop-types";
import { Button, ThemeProvider, Icon } from "react-native-elements"


const styles = StyleSheet.create({
    textTitle: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    container: {
        paddingVertical: 15,
        paddingHorizontal: 15,

    }

});

const theme = {
    Button: {
        buttonStyle: {
            marginBottom: 20,
        },
        titleStyle: {
            fontSize: 20
        }
    }
}

// icon={ <Icon 
//     name="cart-plus"
//     type="font-awesome"
//      /> }


class HomeScreen extends Component {

    static navigationOptions = {
        header: null,
    };
    state = {}
    render() {
        return (
            <ThemeProvider theme={ theme }>
                <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('../../Img/background.jpg') }>

                        <View style={ styles.container }>
                            <Text style={ styles.textTitle }>Швидкі кредити</Text>

                            <Button large titleStyle={ { color: 'black' } } buttonStyle={ { backgroundColor: '#fce4ec' } } title="Мікро позики" onPress={ () => Alert.alert('Simple Button pressed') } />
                            <Button large titleStyle={ { color: 'black' } } buttonStyle={ { backgroundColor: '#f3e5f5' } } title="Кредити" onPress={ () => Alert.alert('Simple Button pressed') } />
                            <Button large titleStyle={ { color: 'black' } } buttonStyle={ { backgroundColor: '#e8f5e9' } } title="Кредитны картки" onPress={ () => Alert.alert('Simple Button pressed') } />
                            <Button large titleStyle={ { color: 'black' } } buttonStyle={ { backgroundColor: '#fff3e0' } } title="Кредитна історія" onPress={ () => Alert.alert('Simple Button pressed') } />
                            <Button large titleStyle={ { color: 'black' } } buttonStyle={ { backgroundColor: '#fffde7' } } title="Статті" onPress={ () => Alert.alert('Simple Button pressed') } />
                        </View>
                        <View style={{marginHorizontal: 55, marginTop: 20}}>
                            <Button
                                title="Інформація"

                                titleStyle={{color: 'white'}} />

                        </View>
                </ImageBackground>

            </ThemeProvider>
        );
    }
}

export default HomeScreen;