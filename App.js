import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
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
import ArticleDetailsScreen from "./components/Articles/ArticleDetailsScreen";


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


  // httpGet = () => {

  //   return new Promise(function (resolve, reject) {

  //     const db = firebase.database();
  //     const jobsRef = db.ref('jobs');
  //     const usersRef = db.ref('users');
  //     let result = [];
  //     usersRef.once('value').then((snap) => {
  //       let data = snap.val();
  //       let array = Object.keys(data);
  //       let count = array.length;
  //       array.map(function (key, index) {
  //         let item = data[key];
  //         jobsRef.child(item.job).once('value', g => {
  //           result.push({ name: item.name, job: g.val() });
  //           if (count == index + 1) {
  //             resolve(result);
  //           }
  //         });
  //       });
  //     });

  //   });

  // }

  // UNSAFE_componentWillMount() {

  //   this.httpGet().then((res) => {
  //     console.log("Result: ", res);
  //     res.map(item => {
  //       console.log("sss: ", item.job);
  //     });
  //   });

  // }

  render() {
    return (
      <RootContainer />
    );
  }
}
