import React, { Component } from 'react';
import { Image, Divider, Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CreditInfoScreenForm from "../CustomElements/CreditInfoScreenForm"
import { connect } from "react-redux";
import Loader from "../CustomElements/Loader";
import ErrorMess from "../CustomElements/ErrorMess";


import * as MicroCredit from './reducer';




class MicroCreditDetailsScreen extends Component {
    static navigationOptions = {
        title: 'Мікропозика',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
    };
    state = {}

    componentDidMount=()=> {
        let mcId = this.props.navigation.getParam('id');
        this.props.getMicroCreditDetails(mcId);
    }
    render() {
        const { isLoading, isError, microCreditDetails: { bank, id, title, description, money, percent, term } } = this.props;

        const details = (
            <CreditInfoScreenForm
                bankName={ bank.name }
                title={ title }
                image={ bank.image }
                description={ description }
                details={ "Сума: " + money + "\n\nВідсоток: " + percent + "\n\nТермін: " + term }
            />
        )

        return (
            isLoading ? (<Loader />) : (isError ? <ErrorMess /> : (details)));
    }
}

const mapStateToProps = ({ microCreditDetails }) => {
    return {
        microCreditDetails: microCreditDetails.data,
        isLoading: microCreditDetails.loading,
        isError: microCreditDetails.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMicroCreditDetails: (id) => {
            dispatch(MicroCredit.getMicroCreditDetails(id));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MicroCreditDetailsScreen);