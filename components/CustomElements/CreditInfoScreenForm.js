import React, { Component } from 'react';

import { Divider, Button  } from 'react-native-elements';
import { View, Text, StyleSheet, ImageBackground, Dimensions,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    textTitle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    textBank: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    container: {
    
        backgroundColor: 'rgba(0,0,0,.5)', height: '100%',
    },
    image: {
        width: Dimensions.get('window').width-30,
        height:  Dimensions.get('window').width-30,
        borderRadius: 30,
        marginLeft: 15,
        marginTop: 15
    },
    descriptionConatainer:{
        width: Dimensions.get('window').width-30,
        marginHorizontal: 15,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,.5)',
        borderRadius: 30,

        
    },
    textDetails:{
        fontSize: 18,
        color: 'white',
        marginBottom: 15
    },
    textDescription: {
        fontSize: 16,
        color: 'white',
        marginBottom: 15,
        marginTop: 15
    }


});

const CreditInfoScreenForm = ({id, title,bankName, image, description, details})=>(
    <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('../../Img/background.jpg') }>
    
    <ScrollView style={ styles.container }>
        <Image style={styles.image} source={ { uri: image } }></Image>
        <Text style={styles.textBank}> {bankName}</Text>

        <Text style={styles.textTitle}> {title}</Text>


        <View style={styles.descriptionConatainer}>
        <Text style={styles.textDetails}>{details}</Text>
        <Divider style={{backgroundColor: 'white'}}/>
        <Text style={styles.textDescription}>{description}</Text>
        <Button buttonStyle={{backgroundColor: 'white'}} titleStyle={{color: 'black'}} title="Подати заяву"></Button>
        <Text/>
        <Divider style={{backgroundColor: 'white'}}/>
        <Text style={styles.textDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
        {/* <View style={{backgroundColor: "#424242", paddingTop: 15, paddingHorizontal: 15}}>
                    <Image
                        style={ { width: '100%', height: 200 } }
                        source={ { uri: image } } />
                    <Text style={ styles.textTitle }>{title}</Text>
                </View>
                
                <View  style={{paddingBottom: 15, paddingHorizontal: 15}}>
                <Button buttonStyle={{backgroundColor:themeColor, marginBottom: 15}} titleStyle={{fontSize: 20}} title="Відправити заяву"></Button>
                    {details}
                    <Divider style={{backgroundColor: themeColor, marginVertical: 15}}></Divider>
                    {description}
                </View> */}
    </ScrollView>
    </ImageBackground>
)
export default CreditInfoScreenForm;