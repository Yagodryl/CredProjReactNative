import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import ArticleItem from "../CustomElements/ArticleItem";

class ListArticlesScreen extends Component {
    state = {}
    render() {
        return (<ScrollView style={ { backgroundColor: "#fffde7" } }>
            <ArticleItem title="Salo sdf sffds fsdd fsdfsdfs sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
            <ArticleItem title="Salo sdf sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
            <ArticleItem title="Salo sdf sffds fsdd fsdfsdfs sffds fsdd fsdfsdfs sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
            <ArticleItem title="Salo sdf sds dsffds fsdd fsdfsdfs sdfsd f sdf sdf"></ArticleItem>
        </ScrollView>);
    }
}

export default ListArticlesScreen;