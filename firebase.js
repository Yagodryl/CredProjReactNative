import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-HwsVyvYWEiF9ZKUeg3_irY1Igmv6Hw4",
    authDomain: "onlinecreditwithoutfailures.firebaseapp.com",
    databaseURL: "https://onlinecreditwithoutfailures.firebaseio.com",
    projectId: "onlinecreditwithoutfailures",
    storageBucket: "onlinecreditwithoutfailures.appspot.com",
    messagingSenderId: "136131232059",
    appId: "1:136131232059:web:465777a2446fccd458371e"
};


export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();