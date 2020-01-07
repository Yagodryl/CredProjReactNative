import React, { Component } from 'react';
import {ScrollView} from "react-native";
import CustomCard from "../CustomElements/CustomCard";


class CaedsListScreen extends Component {
    static navigationOptions = {
        title: 'Кредитні картки',
    };
    state = {  }
    render() { 
        return ( 
            <ScrollView style={ { backgroundColor: '#e8f5e9' } }>
                <CustomCard image="https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg"
                    title="Bank Name"
                    description="dfsfsdfsdfs dfsdfd dsf sd fs dfsdf dfsfsdfsdfs dfsdfd dsf sd fs dfsdf"
                    btnColor="#43a047" />
            </ScrollView>
        );
    }
}

export default CaedsListScreen;