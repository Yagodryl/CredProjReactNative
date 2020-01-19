import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {ImageBackground} from 'react-native';
import ArticleItem from "../CustomElements/ArticleItem";
import Scroller from "../CustomElements/Scroller";
import { connect } from "react-redux";

import * as Articles from "./reducer";


class ListArticlesScreen extends Component {
    static navigationOptions = {
        title: 'Статті',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',  
    };
    state = {}

    componentDidMount=()=>{
        this.props.getArticles();
    }

    redirect=(id)=>{
        this.props.navigation.navigate('ArticleDetails', {
            id: `${id}`,
        });
    }



    render() {
        // const listArticles = 
        //  this.props.articles.map(item =>{
        //     console.log(item)
        //  })

        // console.log(Object.values(this.props.articles));

        let listArticles = Object.values(this.props.articles);
        const mapListArticles = listArticles.map(item=>{
            return (
                <ArticleItem redirect={this.redirect} key={item.id} id={item.id} title={item.title}/>
            )
        })
        return (
            <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('../../Img/articles.jpg') }>

        <ScrollView style={ { backgroundColor: 'rgba(0,0,0,.5)', height: '100%'} }>
        <Scroller navigate={this.props.navigation.navigate}></Scroller>
            {mapListArticles}



            {/* <ArticleItem redirect={this.redirect} id="1" title="Salo sdf sffds fsdd fsdfsdfs sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
            <ArticleItem redirect={this.redirect} id="2" title="Salo sdf sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
            <ArticleItem redirect={this.redirect} id="3" title="Salo sdf sffds fsdd fsdfsdfs sffds fsdd fsdfsdfs sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
            <ArticleItem redirect={this.redirect} id="4" title="Salo sdf sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem> */}
        </ScrollView>
        </ImageBackground>);
    }
}

const mapStateToProps = ({articles}) => {

    console.log("------****---------", articles);
    return {
        articles: articles.data,
        // isLoading: articles.loading,
        // error: articles.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getArticles: ()=>{
            dispatch(Articles.getArticles());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListArticlesScreen);