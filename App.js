import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import HomeScreen from "./components/Home/HomeScreen";
import MicroCreditScreen from "./components/MicroCredit/MicroCreditScreen";
import CreditScreen from "./components/Credit/CreditScreen";
import CardsListScreen from "./components/CardsList/CardsListScreen";

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    MicroCredit : {screen: MicroCreditScreen},
    Credit: {screen: CreditScreen},
    CardsList: {screen: CardsListScreen}

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