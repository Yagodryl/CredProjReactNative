import React, { Component } from 'react';
import { Image, Divider, Button } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CreditInfoScreenForm from "../CustomElements/CreditInfoScreenForm"
import { connect } from "react-redux";
import Loader from "../CustomElements/Loader";
import ErrorMess from "../CustomElements/ErrorMess";

import * as CreditCard from "./reducer";




class CardDetailsScreen extends Component {
    static navigationOptions = {
        title: 'Кредитна картка',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
    };
    state = {}

    componentDidMount = () => {
        let cdId = this.props.navigation.getParam('id');
       //console.log("id", cdId)
        this.props.getCreditCardDetails(cdId);
    }

    render() {

        const { isLoading, isError, creditCardDetails: { bank, id, title, description, money, percent, term } } = this.props;

        const details = (
            <CreditInfoScreenForm
                bankName={ bank.name }
                title={ title }
                image={ bank.image }
                description={ description }
                details={ "Сума: " + money + "\n\nВідсоток: " + percent + "\n\nТермін: " + term }
            />);


        return (isLoading ? (<Loader />) : (isError ? <ErrorMess /> : (details)));
        //return(<Text>ss</Text>)


    }
}

const mapStateToProps = ({ creditCardDetails }) => {
   // console.log("creditCardDetails", creditCardDetails)
    return {
        creditCardDetails: creditCardDetails.data,
        isLoading: creditCardDetails.loading,
        isError: creditCardDetails.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCreditCardDetails: (id) => {
            dispatch(CreditCard.getCreditCardDetails(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetailsScreen);