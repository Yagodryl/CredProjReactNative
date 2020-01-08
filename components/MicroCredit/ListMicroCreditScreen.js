import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import CustomCard from "../CustomElements/CustomCard";




class ListMicroCreditScreen extends Component {
    static navigationOptions = {
        title: 'Мікро позики',
    };

    redirect(id){
        console.log("MicroCreditScreen "+id);  
    }

    state = {}
    render() {
        return (<ScrollView style={ { backgroundColor: "#ffebee" } }>
            <CustomCard image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                title="Bank Name"
                description="dfsfsdfsdfs dfsdfd dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf"
                btnColor="#8e24aa"
                redirect={this.redirect} 
                id={5}/>
            <CustomCard image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                title="Bank Name2"
                description="dfsfsdfsdfs dfsdfddfsdfd dsf sd fs dfsdf dfsfsdfsdfs d dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf"
                btnColor="#8e24aa"
                redirect={this.redirect}
                id={15} />
            <CustomCard image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                title="Bank Name3"
                description="dfsfsdfsdfs fsdfd dsf sd fs dfsdf"
                btnColor="#8e24aa"
                redirect={this.redirect}
                id={25} />
        </ScrollView>);
    }
}

export default ListMicroCreditScreen;