import React, { Component } from 'react';
import { ScrollView, ImageBackground } from "react-native";
import CustomCard from "../CustomElements/CustomCard";
import Scroller from "../CustomElements/Scroller";
import { connect } from "react-redux";
import Loader from "../CustomElements/Loader";
import ErrorMess from "../CustomElements/ErrorMess";

import * as ListCard from "./reducer";



class ListCardsScreen extends Component {
    static navigationOptions = {
        title: 'Кредитні картки',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',  
    };
    state = {}

    componentDidMount=()=>{
        this.props.getCardsList()
    }

    redirect = (id) => {
        this.props.navigation.navigate('CardDetails', {
            id: `${id}`,
        });
    }
    render() {
        const { cardsList, isLoading, isError } = this.props;
        const list = Object.values(cardsList);
        const mapCardsList = list.map(item => {
            return <CustomCard image={ item.bank.image } title={ item.bank.name } description={ item.title } redirect={ this.redirect } id={ item.id } key={ item.id } />

        })

        return (
            <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('../../Img/cards.jpg') }>
                { isLoading ? (<Loader />) : (isError ? <ErrorMess /> : (
                    <ScrollView style={ { backgroundColor: 'rgba(0,0,0,.5)', height: '100%' } }>
                        <Scroller navigate={ this.props.navigation.navigate }/>
                        { mapCardsList }
                    </ScrollView>
                )) }
            </ImageBackground>
        );
    }
}

const mapStateToProps = ({cardsList}) => {

    // console.log("store",cardsList)
    return {
        cardsList: cardsList.data,
        isLoading: cardsList.loading,
        isError: cardsList.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCardsList: () => {
            dispatch(ListCard.getCardsList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCardsScreen);