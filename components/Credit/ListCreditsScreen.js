import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import CustomCard from '../CustomElements/CustomCard'
import Scroller from "../CustomElements/Scroller";

import Loader from "../CustomElements/Loader";
import ErrorMess from "../CustomElements/ErrorMess";
import * as ListCredit from "./reducer";
import { connect } from 'react-redux';

class ListCreditsScreen extends Component {
    static navigationOptions = {
        title: 'Кредити',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
    };
    componentDidMount = () => {
        this.props.getListCredit();
    }
    redirect = (id) => {
        this.props.navigation.navigate('CreditDetails', {
            id: `${id}`,
        });
    }

    render() {

        const { listCredit, isLoading, isError } = this.props;
        const list = Object.values(listCredit);
        
        const mapListCredit = list.map(item => {
            return <CustomCard image={ item.bank.image } title={ item.bank.name } description={ item.title } redirect={ this.redirect } id={ item.id } key={ item.id } />
        });
        console.log(mapListCredit)
        return (
            <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('../../Img/credit.jpg') }>
                { isLoading ? (<Loader />) : (isError ? <ErrorMess /> : (

                    <ScrollView style={ { backgroundColor: 'rgba(0,0,0,.5)', height: '100%' } }>
                        <Scroller navigate={ this.props.navigation.navigate }/>
                            { mapListCredit }
                    </ScrollView>
                )) }
            </ImageBackground>
        );
    }
}

const mapStateToProps = ({ listCredit }) => {

    return {
        listCredit: listCredit.data,
        isLoading: listCredit.loading,
        isError: listCredit.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListCredit: () => {
            dispatch(ListCredit.getListCredit());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListCreditsScreen);