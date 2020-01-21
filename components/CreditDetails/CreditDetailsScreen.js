import React, { Component } from 'react';
import { Image, Divider, Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CreditInfoScreenForm from "../CustomElements/CreditInfoScreenForm"
import { connect } from "react-redux";
import Loader from "../CustomElements/Loader";
import ErrorMess from "../CustomElements/ErrorMess";

import * as Credit from "./reducer";




class CreditDetailsScreen extends Component {
    static navigationOptions = {
        title: 'Кредит',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
    };
    state = {}

    componentDidMount=()=> {
        let cId = this.props.navigation.getParam('id');
        this.props.getCreditDetails(cId);
    }
    render() {

        const { isLoading, isError, creditDetails: { bank, id, title, description, money, percent, term } } = this.props;

        const details = (
            <CreditInfoScreenForm
                bankName={ bank.name }
                title={ title }
                image={ bank.image }
                description={ description }
                details={ "Сума: " + money + "\n\nВідсоток: " + percent + "\n\nТермін: " + term }
            />
        )
        return ( isLoading ? (<Loader />) : (isError ? <ErrorMess /> : (details)));
    }
}

const mapStateToProps = ({ creditDetails }) => {
    console.log("creditDetails",creditDetails)
    return {
        creditDetails: creditDetails.data,
        isLoading: creditDetails.loading,
        isError: creditDetails.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCreditDetails: (id) => {
            dispatch(Credit.getCreditDetails(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CreditDetailsScreen);