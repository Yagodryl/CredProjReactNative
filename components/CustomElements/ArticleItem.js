import React, { Component } from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements';

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'rgba(0,0,0,.5)',
        width: Dimensions.get('window').width - 20,
       // minHeight: Dimensions.get('window').width / 3,
        margin: 10,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    
});

const ArticleItem = ({ title, id, redirect }) => (
<TouchableOpacity onPress={()=>redirect(id)}>

    <View style={ styles.view }>
            <Text style={ { fontSize: 20, color: 'white' } }>{title}</Text>

    </View>
</TouchableOpacity>
    // <Card titleStyle={ { fontSize: 20 } } title={title}>   
    //     <Button buttonStyle={ { backgroundColor: "#f9a825" } } onPress={()=>redirect(id)} title="Читати"></Button>
    // </Card>
)

export default ArticleItem;