import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import ArticleItem from "../CustomElements/ArticleItem";

class ListArticlesScreen extends Component {
    static navigationOptions = {
        title: 'Статті',
    };
    state = {}

    redirect=(id)=>{
        this.props.navigation.navigate('ArticleDetails', {
            id: `${id}`,
        });
    }

    render() {
        return (<ScrollView style={ { backgroundColor: "#fafafa" } }>
            <ArticleItem redirect={this.redirect} id="1" title="Salo sdf sffds fsdd fsdfsdfs sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
            <ArticleItem redirect={this.redirect} id="2" title="Salo sdf sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
            <ArticleItem redirect={this.redirect} id="3" title="Salo sdf sffds fsdd fsdfsdfs sffds fsdd fsdfsdfs sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
            <ArticleItem redirect={this.redirect} id="4" title="Salo sdf sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
        </ScrollView>);
    }
}

export default ListArticlesScreen;