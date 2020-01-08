import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const ArticleItem = ({ title, id }) => (
    <Card titleStyle={ { fontSize: 20 } } title={title}>   
        <Button buttonStyle={ { backgroundColor: "#f9a825" } } onPress={()=>Alert.alert("Article", id)} title="Читати"></Button>
    </Card>
)

export default ArticleItem;