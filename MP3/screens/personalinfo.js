import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button, Alert, TextInput,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function PersonalInfo() {
  const [selectedCity, setSelectedCity] = useState();
  
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
        
        <Picker selectedValue={selectedCity}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedCity(itemValue)}>
          <Picker.Item label='Manila, NCR' value="man"/>
          <Picker.Item label='Las Pinas, NCR' value="lp"/>
          <Picker.Item label='Caloocan, NCR' value="cal"/>
        </Picker>
        <Text style= {styles.labelstyle}>Date of 1st Dose (MM-DD-YYYY)</Text>
        <TextInput style={styles.inputStyles} placeholder='MM-DD-YYY'></TextInput>

        <Text style= {styles.labelstyle}>Where did you have your 2nd Dose Vaccination?</Text>
        
        <Picker selectedValue={selectedCity}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedCity(itemValue)}>
          <Picker.Item label='Manila, NCR' value="man"/>
          <Picker.Item label='Las Pinas, NCR' value="lp"/>
          <Picker.Item label='Caloocan, NCR' value="cal"/>
        </Picker>
        <Text style= {styles.labelstyle}>Date of 2nd Dose (MM-DD-YYYY)</Text>
        <TextInput style={styles.inputStyles} placeholder='MM-DD-YYY'></TextInput>

        <Text style= {styles.labelstyle}>Where did you have your Additional Dose Vaccination?</Text>
        
        <Picker selectedValue={selectedCity}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedCity(itemValue)}>
          <Picker.Item label='Manila, NCR' value="man"/>
          <Picker.Item label='Las Pinas, NCR' value="lp"/>
          <Picker.Item label='Caloocan, NCR' value="cal"/>
        </Picker>
        <Text style= {styles.labelstyle}>Date of additional Dose (MM-DD-YYYY)</Text>
        <TextInput style={styles.inputStyles} placeholder='MM-DD-YYY'></TextInput>
        <View style = {{margin:15, alignItems:'center'}}>
          <Button
          title='Submit'
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