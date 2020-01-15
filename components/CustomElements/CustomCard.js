import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

// import { Button, ThemeProvider, Icon } from "react-native-elements"
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'rgba(0,0,0,.5)',
        width: Dimensions.get('window').width - 20,
        minHeight: Dimensions.get('window').width / 3,
        margin: 10,
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row'
    },
    image: {
        width: Dimensions.get('window').width / 3 - 10,
        height: Dimensions.get('window').width / 3 - 10,

        borderRadius: 5
    },
    details: {
        width: Dimensions.get('window').width * (0.6) - 10,
        marginLeft: 10
        // height: Dimensions.get('window').width/(3*2)-10,
    }
});

const CustomCard = ({ id, image, title, description, redirect }) => (
    <TouchableOpacity onPress={()=>redirect(id)}>
        <View style={ styles.view }>
            <Image style={ styles.image } source={ { uri: image } } />
            <View style={ styles.details }>

                <Text style={ { fontSize: 20, color: 'white' } }>
                    { title }
                </Text>
                <Divider style={ { backgroundColor: 'white' } } />
                <Text style={ { marginBottom: 10, fontSize: 16, color: 'white' } }>
                    { description }
                </Text>
            </View>

        </View>
    </TouchableOpacity>
    // <Card titleStyle={ { fontSize: 20 } } containerStyle={{backgroundColor: "#212121", borderColor: "#212121"}} title={title}
    //     image={ { uri: image } } imageStyle={{height: Dimensions.get('window').width/1.3}}
    // >   
    //     <Text style={ { marginBottom: 10, fontSize: 16, color: 'white' } }>
    //         {description}
    //     </Text>
    //     <Button buttonStyle={ { backgroundColor: btnColor } } onPress={()=>redirect(id)}  title="Детальніше"></Button>
    // </Card>
)

export default CustomCard;