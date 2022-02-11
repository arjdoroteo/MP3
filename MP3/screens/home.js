import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import Checkbox from 'expo-checkbox';


export default function Home({navigation}) {
    const [isYesChecked, setYesChecked] = useState(false);
    const [isNoChecked, setNoChecked] = useState(false);
    const createTwoButtonAlert = () =>
      Alert.alert('Notice', 'You have to wait more than 48 hours of any of your dose to proceed', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    const submitHandler = () => {
      navigation.navigate('Information')
    }

    const certhandler = () => {
      navigation.navigate('Certificate')
    }
    return (
      <View style={styles.rootContainer}>
        <View style = {styles.upperContainer}>
          <Image source={require('../assets/logo.png')}/>
        </View>
        <View style = {styles.lowerContainer}>
          <Text style = {styles.textStyle}>Were you vaccinated more than 48 hours ago for any of your doses?</Text>
          <View style = {styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isYesChecked}
              onValueChange={() => setYesChecked(!isYesChecked)}
              color={isYesChecked ? '#4630EB' : undefined}
            />
            <Text style ={{margin:10, fontSize: 18}}>Yes</Text>
          </View>
          <View style = {styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isNoChecked}
              onValueChange={() => setNoChecked(createTwoButtonAlert)}
              disabled = {isYesChecked}
              color={isNoChecked ? '#4630EB' : undefined}
            />
            <Text style ={{margin:10, fontSize: 18}}>No</Text>
          </View>
          <View style = {styles.submitbtn}>
            <Button
            title = "Submit"
            disabled = {!isYesChecked}
            onPress = {submitHandler}>
            </Button>
          </View>
          <View style = {styles.submitbtn}>
            <Button
            title = "Track your Certificate"
            onPress = {certhandler}>
            </Button>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    upperContainer: {
      backgroundColor:'white',
      flex:1,
      justifyContent: 'center'
  
    },
    lowerContainer: {
      backgroundColor:'white',
      flex:2,
      margin: 30,
    },
    textStyle:{
      fontSize:18
    },
    checkboxContainer:{
      marginVertical: 5,
      alignItems:'center',
      flexDirection: 'row',
      padding: 5
    },
    submitbtn:{
      alignItems:'center',
      margin: 10
    }
  });