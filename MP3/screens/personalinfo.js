import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button, Alert, TextInput, } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PersonalInfo({navigation}) {
  const [selectedfirstCity, setfirstSelectedCity] = useState('');
  const [selectedsecondCity, setsecondSelectedCity] = useState('');
  const [selectedthirdCity, setthirdSelectedCity] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [suffix, setSuffix] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [firstDose, setFirstDose] = useState('');
  const [secondDose, setSecondDose] = useState('');
  const [thirdDose, setThirdDose] = useState('');

  const saveHandler = async() => {
    try{
      let person = {
        lname:lastName,
        fname:firstName,
        mname:middleName,
        sname:suffix,
        bday:birthdate,
        fcity:selectedfirstCity,
        fdose:firstDose,
        scity:selectedsecondCity,
        sdose:secondDose,
        tcity:selectedthirdCity,
        tdose:thirdDose
      }
      person = JSON.stringify(person)
      await AsyncStorage.setItem('user',person)
      navigation.navigate('Home')
    }
    catch(e){
      alert(e)
    }
  }
  const submitHandler = () => {
    if ((lastName == ''|| (firstName == '')|| (middleName == '')|| (birthdate == '')
    || (firstDose == '')|| (secondDose == ''))){
      Alert.alert('Notice', 'Please complete the information below.', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'cancel',
        },
        
      ]);
    }
    else {
      Alert.alert('Notice', 'Thank you for submitting, Please track your certificate in the home screen.', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => saveHandler()},
      ]);
      
    }
  }

    return (
      <ScrollView style={styles.scrollContainer}>
        <Text style= {styles.headerStyle}>Please enter your information below. Ensure that they match the details on your vaccination card</Text>
        <Text style= {styles.labelstyle}>Last Name</Text>
        <TextInput style={styles.inputStyles } placeholder='Last Name' onChangeText={(val) => setLastName(val)}></TextInput>
        <Text style= {styles.labelstyle}>First Name</Text>
        <TextInput style={styles.inputStyles} placeholder='First Name' onChangeText={(val) => setFirstName(val)}></TextInput>
        <Text style= {styles.labelstyle}>Middle Name</Text>
        <TextInput style={styles.inputStyles} placeholder='Middle Name' onChangeText={(val) => setMiddleName(val)}></TextInput>
        <Text style= {styles.labelstyle}>Suffix</Text>
        <TextInput style={styles.inputStyles} placeholder='Suffix (Optional)' onChangeText={(val) => setSuffix(val)}></TextInput>
        
        <Text style= {styles.labelstyle}>Birthdate (MM-DD-YYYY)</Text>
        <TextInput style={styles.inputStyles} placeholder='MM-DD-YYY' onChangeText={(val) => setBirthdate(val)}></TextInput>
        <Text style= {styles.labelstyle}>Where did you have your 1st Dose Vaccination?</Text>
        
        <Picker selectedValue={selectedfirstCity}
        onValueChange={(itemValue, itemIndex) =>
        setfirstSelectedCity(itemValue)}>
          <Picker.Item label='-' value="-"/>
          <Picker.Item label='Manila, NCR' value="man"/>
          <Picker.Item label='Las Pinas, NCR' value="lp"/>
          <Picker.Item label='Caloocan, NCR' value="cal"/>
        </Picker>
        <Text style= {styles.labelstyle}>Date of 1st Dose (MM-DD-YYYY)</Text>
        <TextInput style={styles.inputStyles} placeholder='MM-DD-YYY' onChangeText={(val) => setFirstDose(val)}></TextInput>

        <Text style= {styles.labelstyle}>Where did you have your 2nd Dose Vaccination?</Text>
        
        <Picker selectedValue={selectedsecondCity}
        onValueChange={(itemValue, itemIndex) =>
        setsecondSelectedCity(itemValue)}>
          <Picker.Item label='-' value="-"/>
          <Picker.Item label='Manila, NCR' value="man"/>
          <Picker.Item label='Las Pinas, NCR' value="lp"/>
          <Picker.Item label='Caloocan, NCR' value="cal"/>
        </Picker>
        <Text style= {styles.labelstyle}>Date of 2nd Dose (MM-DD-YYYY)</Text>
        <TextInput style={styles.inputStyles} placeholder='MM-DD-YYY' onChangeText={(val) => setSecondDose(val)}></TextInput>

        <Text style= {styles.labelstyle}>Where did you have your Additional Dose Vaccination?</Text>
        
        <Picker selectedValue={selectedthirdCity}
        onValueChange={(itemValue, itemIndex) =>
        setthirdSelectedCity(itemValue)}>
          <Picker.Item label='-' value="-"/>
          <Picker.Item label='Manila, NCR' value="man"/>
          <Picker.Item label='Las Pinas, NCR' value="lp"/>
          <Picker.Item label='Caloocan, NCR' value="cal"/>
        </Picker>
        <Text style= {styles.labelstyle}>Date of additional Dose (MM-DD-YYYY)</Text>
        <TextInput style={styles.inputStyles} placeholder='MM-DD-YYY (Optional)' onChangeText={(val) => setThirdDose(val)}></TextInput>
        <View style = {{margin:15, alignItems:'center'}}>
          <Button
          title='Submit'
          onPress={submitHandler}
          
          />
        </View>
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