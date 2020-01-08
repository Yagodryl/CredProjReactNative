import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { View, Text, StyleSheet } from 'react-native';
import CustomCard from '../CustomElements/CustomCard'

class ListCreditsScreen extends Component {
    static navigationOptions = {
        title: 'Кредити',
    };
    // #283593
    state = {}
    render() {
        return (
            <ScrollView style={ { backgroundColor: '#f3e5f5' } }>
                <CustomCard image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                    title="Bank Name"
                    description="dfsfsdfsdfs dfsdfd dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf"
                    btnColor="#283593" />
            </ScrollView>
        );
    }
}

export default ListCreditsScreen;