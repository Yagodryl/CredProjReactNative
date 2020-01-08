import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import HomeScreen from "./components/Home/HomeScreen";
import ListMicroCreditScreen from "./components/MicroCredit/ListMicroCreditScreen";
import ListCreditsScreen from "./components/Credit/ListCreditsScreen";
import ListCardsScreen from "./components/Cards/ListCardsScreen";
import ListArticlesScreen from "./components/Articles/ListArticlesScreen";
const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    ListMicroCredit : {screen: ListMicroCreditScreen},
    ListCredit: {screen: ListCreditsScreen},
    ListCards: {screen: ListCardsScreen},
    ListArticles: {screen: ListArticlesScreen}

  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#777777',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const RootContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <RootContainer />
    );
  }
}