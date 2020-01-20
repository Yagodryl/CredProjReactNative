import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Loader from './components/CustomElements/Loader';
import ErrorMess from './components/CustomElements/ErrorMess';
//firebase
import firebase from "./firebase";


//Screens
import HomeScreen from "./components/Home/HomeScreen";
import ListMicroCreditScreen from "./components/MicroCredit/ListMicroCreditScreen";
import ListCreditsScreen from "./components/Credit/ListCreditsScreen";
import ListCardsScreen from "./components/Cards/ListCardsScreen";
import ListArticlesScreen from "./components/Articles/ListArticlesScreen";

import MicroCreditDetailsScreen from "./components/MicroCredit/MicroCreditDetailsScreen"
import CreditDetailsScreen from "./components/Credit/CreditDetailsScreen"
import CardDetailsScreen from "./components/Cards/CardDetailsScreen"
import ArticleDetailsScreen from "./components/ArticleDetails/ArticleDetailsScreen";


const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    ListMicroCredit: { screen: ListMicroCreditScreen },
    ListCredit: { screen: ListCreditsScreen },
    ListCards: { screen: ListCardsScreen },
    ListArticles: { screen: ListArticlesScreen },

    MicroCreditDetails: { screen: MicroCreditDetailsScreen },
    CreditDetails: { screen: CreditDetailsScreen },
    CardDetails: { screen: CardDetailsScreen },
    ArticleDetails: { screen: ArticleDetailsScreen }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {

    },
  },
);

const RootContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {

  state = {
    isLoading: true,
    isError: false
  }



  // setArticle(ar){
  //   const db = firebase.database().ref();
  //   let id = db.child("/articles").push();
  //   id.set({...ar, id: id.key});
  // }

  componentDidMount() {

    const auth = firebase.auth();
    auth.signInAnonymously().then((snap) => {
      //console.log(snap);
      this.setState({ isLoading: false, isError: false });
    })
    .catch((err)=>{
      this.setState({ isLoading: false, isError: true });

    })


    //this.setArticle({title: "Кредит это" , text: "(лат. creditum — заём от лат. credere — доверять) — экономические отношения, при которых одна сторона получает от другой денежные средства, товары/вещи, не запрещенные соответствующим законодательством к передаче и обещает предоставить возмещение (оплату) или вернуть ресурсы в будущем. Фактически, кредит является юридическим оформлением экономического обязательства.\n      Кредитные отношения могут выражаться в разных формах: коммерческий кредит, банковский кредит, заём, лизинг, факторинг и т. д."})
    // firebase.database().ref().once('value', (snap) => {
    //   console.log(snap.val());
    // })
  }




  render() {

    const loading = (
      <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('./Img/background.jpg') }>
        <Loader/>
      </ImageBackground>
    )

    const error = (
      <ImageBackground style={ { width: '100%', height: '100%' } } source={ require('./Img/background.jpg') }>
        <ErrorMess/>
      </ImageBackground>
    )

    return (
      (this.state.isLoading) ? ( loading) : ( this.state.isError? error :<RootContainer />)
    );
  }
}
