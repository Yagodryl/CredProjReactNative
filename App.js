import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import HomeScreen from "./components/Home/HomeScreen";

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
  },
  {
    initialRouteName: 'Home',
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#777777',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // },
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