import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const ArticleItem = ({ title }) => (
    <Card titleStyle={ { fontSize: 20 } } title={title}>   
        <Button buttonStyle={ { backgroundColor: "#f9a825" } } title="Читати"></Button>
    </Card>
)

export default ArticleItem;