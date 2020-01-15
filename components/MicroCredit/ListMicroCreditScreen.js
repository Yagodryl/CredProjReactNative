import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';


import CustomCard from "../CustomElements/CustomCard";
import Scroller from "../CustomElements/Scroller";



class ListMicroCreditScreen extends Component {
    static navigationOptions = {
        title: 'Мікропозики',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',  
    };
    
    state = {}

    redirect=(id)=>{
        console.log("MicroCreditScreen "+id);  
        this.props.navigation.navigate('MicroCreditDetails', {
            id: `${id}`,
        });
    }

    render() {

        return (
            <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('../../Img/microcredit.jpg') }>
        <ScrollView style={ { backgroundColor: 'rgba(0,0,0,.5)', height: '100%' } }>
        <Scroller navigate={this.props.navigation.navigate}></Scroller>
            <CustomCard image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                title="Bank Name 5"
                description="dfsfsdfsdfs dfsdfd dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf"
                redirect={this.redirect} 
                id={5}/>
            <CustomCard image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                title="Bank Name 15"
                description="dfsfsdfsdfs dfsdfddfsdfd dsf sd fs dfsdf dfsfsdfsdfs d dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf"
                redirect={this.redirect}
                id={15} />
            <CustomCard image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                title="Bank Name 25"
                description="dfsfsdfsdfs fsdfd dsf sd fs dfsdf"
                redirect={this.redirect}
                id={25} />
                <CustomCard image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                title="Bank Name 5"
                description="dfsfsdfsdfs dfsdfd dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf"
                redirect={this.redirect} 
                id={5}/>
            <CustomCard image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                title="Bank Name 15"
                description="dfsfsdfsdfs dfsdfddfsdfd dsf sd fs dfsdf dfsfsdfsdfs d dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf"
                redirect={this.redirect}
                id={15} />
            <CustomCard image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                title="Bank Name 25"
                description="dfsfsdfsdfs fsdfd dsf sd fs dfsdf"
                redirect={this.redirect}
                id={25} />
        </ScrollView>
        </ImageBackground>);
    }
}

export default ListMicroCreditScreen;