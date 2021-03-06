import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ImageBackground, Alert, Dimensions, TouchableHighlight,TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { Button, ThemeProvider, Icon, } from "react-native-elements"


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
    },

    Image: {
        height: '100%', width: '100%', borderRadius: 25,
        
    },
    view: {
        position: 'absolute',
        backgroundColor: 'transparent',
    
    },
    button:{
        height: Dimensions.get('window').width / 3, 
        width: '100%',
        marginVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
    justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center'
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
    },
    Image: {

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

        const { navigate } = this.props.navigation;

        return (

            <ThemeProvider theme={ theme }>
                <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('../../Img/background.jpg') }>
                    <ScrollView style={ { backgroundColor: 'rgba(0,0,0,.5)', height: '100%' } }>

                        <View style={ styles.container }>
                            <Text style={ styles.textTitle }>Швидкі кредити</Text>
                            <TouchableOpacity style={ styles.button} onPress={ () => navigate('ListMicroCredit') } >
                                <Image style={styles.Image} source={ require('../../Img/microcredit.jpg') } />
                                <View style={ styles.view }>
                                    <Text style={styles.text}>Мікропозики</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={ styles.button} onPress={ () => navigate('ListCredit') }  >
                                <Image style={styles.Image} source={ require('../../Img/credit.jpg') } />
                                <View style={ styles.view }>
                                    <Text style={styles.text}>Кредити</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={ styles.button} onPress={ () => navigate('ListCards') } >
                                <Image style={styles.Image} source={ require('../../Img/cards.jpg') } />
                                <View style={ styles.view }>
                                    <Text style={styles.text}>Кредитні картки</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={ styles.button} onPress={ () => navigate('History') }  >
                                <Image style={styles.Image} source={ require('../../Img/history.jpg') } />
                                <View style={ styles.view }>
                                    <Text style={styles.text}>Кредитна історія</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={ styles.button} onPress={ () => navigate('ListArticles') }  >
                                <Image style={styles.Image} source={ require('../../Img/articles.jpg') } />
                                <View style={ styles.view }>
                                    <Text style={styles.text}>Статті</Text>
                                </View>
                            </TouchableOpacity>
                            {/* <Button large titleStyle={ { color: 'black' } } buttonStyle={ { ba } } title="Мікропозики" onPress={ () => navigate('ListMicroCredit') } />
                        <Button large titleStyle={ { color: 'black' } } buttonStyle={ { backgroundColor: '#f3e5f5' } } title="Кредити" onPress={ () => navigate('ListCredit') } />
                        <Button large titleStyle={ { color: 'black' } } buttonStyle={ { backgroundColor: '#e8f5e9' } } title="Кредитні картки" onPress={ () => navigate('ListCards') } />
                        <Button large titleStyle={ { color: 'black' } } buttonStyle={ { backgroundColor: '#fff3e0' } } title="Кредитна історія" onPress={ () => Alert.alert('History') } />
                        <Button large titleStyle={ { color: 'black' } } buttonStyle={ { backgroundColor: '#fffde7' } } title="Статті" onPress={ () => navigate('ListArticles') } /> */}
                        </View>
                        <View style={ { marginHorizontal: 55, marginTop: 20 } }>
                            <Button
                                title="Інформація" type="clear"
                                onPress={ () => Alert.alert("Info", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.") } />

                        </View>
                    </ScrollView>
                </ImageBackground>

            </ThemeProvider>

        );
    }
}

export default HomeScreen;