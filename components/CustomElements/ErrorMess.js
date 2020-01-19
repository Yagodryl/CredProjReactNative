import React, { Component } from 'react';
import {View, Text } from "react-native";
const ErrorMess=()=>(
    <View style={ { alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.5)', flex: 1 } }><Text style={ { fontSize: 30, color: '#ffcdd2' } }>Error!</Text></View>
)

export default ErrorMess;