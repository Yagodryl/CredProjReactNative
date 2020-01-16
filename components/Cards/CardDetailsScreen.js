import React, { Component } from 'react';
import { Image, Divider, Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CreditInfoScreenForm from "../CustomElements/CreditInfoScreenForm"





class CardDetailsScreen extends Component {
    static navigationOptions = {
        title: 'Кредитна картка',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
    };
    state = {}

    render() {

        return (
            <CreditInfoScreenForm
                title="Bank Name Card"
                image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                description='<Text>dfsfsdfsdfs dfsdfddfsdfd dsf sd fs dfsdf dfsfsdfsdfs d dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf</Text><Text>dfsfsdfsdfs dfsdfddfsdfd dsf sd fs dfsdf dfsfsdfsdfs d dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf</Text>     <Text>dfsfsdfsdfs dfsdfddfsdfd dsf sd fs dfsdf dfsfsdfsdfs d dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf</Text>'
                details='<Text>dfsfsdfsdfs dfsdfddfsdfd dsf sd fs dfsdf dfsfsdfsdfs d dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf</Text>'
            />
        );
    }
}

export default CardDetailsScreen;