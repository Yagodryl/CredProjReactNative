import React, { Component } from 'react';
import {View, Text } from "react-native";
const Loader=()=>(
    <View style={ { alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.5)', flex: 1 } }><Text style={ { fontSize: 30, color: 'white' } }>Loading...</Text></View>
)

export default Loader;