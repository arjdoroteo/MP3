import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button, Alert, TextInput} from 'react-native';

export default function PersonalInfo() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <Text style= {styles.headerStyle}>Please enter your information below. Ensure that they match the details on your vaccination card</Text>
        <Text style= {styles.labelstyle}>Last Name</Text>
        <TextInput style={styles.inputStyles} placeholder='Last Name'></TextInput>
        <Text style= {styles.labelstyle}>First Name</Text>
        <TextInput style={styles.inputStyles} placeholder='First Name'></TextInput>
        <Text style= {styles.labelstyle}>Middle Name</Text>
        <TextInput style={styles.inputStyles} placeholder='Middle Name'></TextInput>
        <Text style= {styles.labelstyle}>Suffix</Text>
        <TextInput style={styles.inputStyles} placeholder='Suffix'></TextInput>
        <Text style= {styles.labelstyle}>Birthdate (MM-DD-YYYY)</Text>
        <TextInput style={styles.inputStyles} placeholder='MM-DD-YYY'></TextInput>
        <Text style= {styles.labelstyle}>Where did you have your 1st Dose Vaccination?</Text>
        
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    scrollContainer : {
      margin: 10,
    },
    labelstyle:{
      margin:10,
      fontSize: 18
    },
    headerStyle:{
      margin:10,
      fontSize: 17
    },
    inputStyles:{
      width: 350,
      borderColor:'gray',
      borderBottomWidth: 1,
      margin:10,
      fontSize: 15
    }
  });