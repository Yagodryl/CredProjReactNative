import React, { Component } from 'react';
import { ScrollView, ImageBackground } from "react-native";
import CustomCard from "../CustomElements/CustomCard";
import Scroller from "../CustomElements/Scroller";


class ListCardsScreen extends Component {
    static navigationOptions = {
        title: 'Кредитні картки',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',  
    };
    state = {}

    redirect = (id) => {
        this.props.navigation.navigate('CardDetails', {
            id: `${id}`,
        });
    }
    render() {
        return (
            <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('../../Img/cards.jpg') }>

            <ScrollView style={ { backgroundColor: 'rgba(0,0,0,.5)', height: '100%' } }>
        <Scroller navigate={this.props.navigation.navigate}></Scroller>
                
                <CustomCard image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                    title="Bank Name"
                    description="dfsfsdfsdfs dfsdfd dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf"
                    btnColor="#43a047"
                    redirect={ this.redirect } />
            </ScrollView>
            </ImageBackground>
        );
    }
}

export default ListCardsScreen;