import React, { Component } from 'react';

import ArticleInfoScreenFrom from '../CustomElements/ArticleInfoScreenFrom';
import { Text } from 'react-native';

import { connect } from "react-redux";
import Loader from "../CustomElements/Loader";
import ErrorMess from "../CustomElements/ErrorMess";


import * as Article from "./reducer";

class ArticleDetailsScreen extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
    };
    componentDidMount = () => {
        let articleId = this.props.navigation.getParam('id');
        this.props.getArticle(articleId);
    }

    render() {

        const { isLoading, isError, article: { title, text } } = this.props;
        return (
            isLoading ? (<Loader />) : (isError ? <ErrorMess /> : (
                <ArticleInfoScreenFrom
                    text={ text }
                    title={ title }
                />
            )));
    }
}

const mapStateToProps = ({ article }) => {

    return {
        article: article.data,
        isLoading: article.loading,
        isError: article.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getArticle: (id) => {
            dispatch(Article.getArticle(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailsScreen);

//export default (ArticleDetailScreen);