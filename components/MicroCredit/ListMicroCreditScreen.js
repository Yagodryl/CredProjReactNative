import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import Loader from "../CustomElements/Loader";
import ErrorMess from "../CustomElements/ErrorMess";

import * as ListMicroCredit from "./reducer";

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

    componentDidMount = () => {
        this.props.getListrMicroCredit();
    }

    redirect = (id) => {
        // console.log("MicroCreditScreen "+id);  
        this.props.navigation.navigate('MicroCreditDetails', {
            id: `${id}`,
        });
    }

    render() {
        const { listMicroCredit, isLoading, isError } = this.props;
        let list = Object.values(listMicroCredit);
        // console.log(list);
        const mapListMicroCredit = list.map(item => {
            return <CustomCard image={ item.bank.image } title={ item.bank.name } description={ item.title } redirect={ this.redirect } id={ item.id } key={ item.id } />

        })
        return (
            <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('../../Img/microcredit.jpg') }>
                { isLoading ? (<Loader />) : (isError ? <ErrorMess /> : (
                    <ScrollView style={ { backgroundColor: 'rgba(0,0,0,.5)', height: '100%' } }>
                        <Scroller navigate={ this.props.navigation.navigate }></Scroller>
                        { mapListMicroCredit }
                    </ScrollView>
                )) }
            </ImageBackground>);
    }
}

const mapStateToProps = ({ listMicroCredit }) => {

    return {
        listMicroCredit: listMicroCredit.data,
        isLoading: listMicroCredit.loading,
        isError: listMicroCredit.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListrMicroCredit: () => {
            dispatch(ListMicroCredit.getListrMicroCredit());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMicroCreditScreen);