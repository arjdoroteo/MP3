import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button, Alert,} from 'react-native';

export default function Cert ({navigation}){

    return (
        <View>
            <Text>{navigation.getParam('lName')}</Text>
            <Text>{navigation.getParam('fname')}</Text>
            <Text>{navigation.getParam('mname')}</Text>
            <Text>{navigation.getParam('sname')}</Text>
            <Text>{navigation.getParam('bday')}</Text>
            
        </View>
    )
}