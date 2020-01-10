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


  httpGet = () => {

    return new Promise(function (resolve, reject) {

      const db = firebase.database();
      const jobsRef = db.ref('jobs');
      const usersRef = db.ref('users');
      let result = [];
      usersRef.once('value').then((snap) => {
        let data = snap.val();
        let array = Object.keys(data);
        let count = array.length;
        array.map(function (key, index) {
          let item = data[key];
          jobsRef.child(item.job).once('value', g => {
            result.push({ name: item.name, job: g.val() });
            if (count == index + 1) {
              resolve(result);
            }
          });
        });
      });

    });

  }

  UNSAFE_componentWillMount() {

    this.httpGet().then((res) => {
      console.log("Result: ", res);
      res.map(item => {
        console.log("sss: ", item.job);
      });
    });

  }

  render() {
    return (
      <RootContainer />
    );
  }
}import React, { Component } from 'react';
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


  httpGet = () => {

    return new Promise( function (resolve, reject) {

    /*
    Робочий вариант, но с костылём 
    if(count==index+1){
      resolve(result);
    }
    проблема заключается в том что два запроса 
      usersRef.once('value').then((snap) => {
        ...
          jobsRef.child(item.job).once('value', g => {
            ...
    и первый срабатывает быстрей, а второй не успевает сработать
    пробывал async await - чот не получилось
    здесь работает 
     */
/*****************************************************  */
      const db = firebase.database();
      const jobsRef = db.ref('jobs');
      const usersRef = db.ref('users');
      let result = [];
      usersRef.once('value').then((snap) => {
        let data = snap.val();
        let array = Object.keys(data);
        let count = array.length;
        array.map( function (key, index) {
          let item = data[key];
          jobsRef.child(item.job).once('value', g => {
            result.push({ name: item.name, job: g.val() });
           // console.log(count, index);
            if(count==index+1){
              resolve(result);
            }
          });
        });
      })
/**************************************************** */
    

        
      /*
      не робочий вариант
      когда пишешь (res - результат промиса)
      console.log("Result: ",  res); - ок

      console.log("Result: ",  res.name); - undefined
      
      */


      // const db = firebase.database().ref();
      // const jobsRef = db.child('jobs');
      // const usersRef = db.child('users');
      // let employees = [];
      // let send = false;
      

      // usersRef.on('child_added', (snap) => {


      //   let a = snap.val();
      //   jobsRef.child(snap.val().job).once('value').then( data => {
      //     // a.job = data.val();
          
      //     employees.push({ name: a.name, job: data.val() });
      //     // console.log(data.val());
      //     //send = true;
      //   });
        
      // });
      // //if(send)
      // resolve(employees);


    
    });

  }

  UNSAFE_componentWillMount() {

    //console.log(employees);
    this.httpGet().then((res) => {
      console.log("Result: ",  res);
      res.map(item => {
        console.log("sss: ",item.job);
      })
    })


    // employees.map(item=>{
    //   console.log(item);
    // })
    // db.ref('users/user1').set({
    //   name: "ivan",
    //   job: '01'
    // });
    // db.ref('users/user2').set({
    //   name: "ivan2",
    //   job: '01'
    // });
    // db.ref('users/user3').set({
    //   name: "ivan3",
    //   job: '02'
    // });
    // db.ref('jobs/01').set({
    //   name: "programer",
    //   salary: "5000$"
    // });
    // db.ref('jobs/02').set({
    //   name: "designer",
    //   salary: "4500$"
    // });

  }

  render() {
    return (
      <RootContainer />
    );
  }
}