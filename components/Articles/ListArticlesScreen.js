import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {ImageBackground} from 'react-native';
import ArticleItem from "../CustomElements/ArticleItem";
import Scroller from "../CustomElements/Scroller";

class ListArticlesScreen extends Component {
    static navigationOptions = {
        title: 'Статті',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',  
    };
    state = {}

    redirect=(id)=>{
        this.props.navigation.navigate('ArticleDetails', {
            id: `${id}`,
        });
    }

    render() {
        return (
            <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('../../Img/articles.jpg') }>

        <ScrollView style={ { backgroundColor: 'rgba(0,0,0,.5)', height: '100%'} }>
        <Scroller navigate={this.props.navigation.navigate}></Scroller>
         
            <ArticleItem redirect={this.redirect} id="1" title="Salo sdf sffds fsdd fsdfsdfs sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
            <ArticleItem redirect={this.redirect} id="2" title="Salo sdf sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
            <ArticleItem redirect={this.redirect} id="3" title="Salo sdf sffds fsdd fsdfsdfs sffds fsdd fsdfsdfs sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
            <ArticleItem redirect={this.redirect} id="4" title="Salo sdf sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
        </ScrollView>
        </ImageBackground>);
    }
}

export default ListArticlesScreen;