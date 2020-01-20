import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import ArticleItem from "../CustomElements/ArticleItem";
import Scroller from "../CustomElements/Scroller";
import { connect } from "react-redux";
import Loader from "../CustomElements/Loader";
import ErrorMess from "../CustomElements/ErrorMess";


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

    componentDidMount = () => {
        this.props.getArticles();
    }

    redirect = (id) => {
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
        const mapListArticles = listArticles.map(item => {
            return (
                <ArticleItem redirect={ this.redirect } key={ item.id } id={ item.id } title={ item.title } />
            )
        })
        return (
            <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('../../Img/articles.jpg') }>
                {this.props.isLoading? (<Loader/>): (this.props.isError?<ErrorMess/>:(
                    <ScrollView style={ { backgroundColor: 'rgba(0,0,0,.5)', height: '100%' } }>
                    <Scroller navigate={ this.props.navigation.navigate }></Scroller>
                    { mapListArticles }
                </ScrollView>
                ))}
                
            </ImageBackground>);
    }
}

const mapStateToProps = ({ articles }) => {

    return {
        articles: articles.data,
        isLoading: articles.loading,
        isError: articles.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getArticles: () => {
            dispatch(Articles.getArticles());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListArticlesScreen);