import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button, Alert,Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cert ({navigation}){
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

    const trackHandler = async () => {
            try {
                let lname = await AsyncStorage.getItem('lname')
                let fname = await AsyncStorage.getItem('fname',firstName)
                let mname = await AsyncStorage.getItem('mname',middleName)
                let sname = await AsyncStorage.getItem('sname',suffix)
                let bday = await AsyncStorage.getItem('bday',birthdate)
                let fcity = await AsyncStorage.getItem('1stcity',selectedfirstCity)
                let scity = await AsyncStorage.getItem('2ndcity',selectedsecondCity)
                let tcity = await AsyncStorage.getItem('3rdcity',selectedthirdCity)
                let fdose = await AsyncStorage.getItem('1stdose',firstDose)
                let sdose = await AsyncStorage.getItem('2nddose',secondDose)
                let tdose = await AsyncStorage.getItem('3rddose',thirdDose)
                
                setLastName(lname)
                setFirstName(fname)
                setMiddleName(mname)
                setSuffix(sname)
                setBirthdate(bday)
                setFirstDose(fdose)
                setSecondDose(sdose)
                setThirdDose(tdose)
                setfirstSelectedCity(fcity)
                setsecondSelectedCity(scity)
                setthirdSelectedCity(tcity)
            }
            catch(e){
                alert(e)
            }
        }
    return (
        <View style={styles.rootContainer}>
            <View style={styles.upperContainer}> 

                <Text>{lastName}</Text>
            </View>
            <View style={styles.lowerContainer}>
                <Pressable onPress = {trackHandler} >
                    <Text style={styles.textContainer}>+</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor: 'white'
    },
    upperContainer:{
        flex:10,
        backgroundColor:'yellow'
    },
    lowerContainer:{
        flex:0.5,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'flex-end',
        padding: 30

    },
    textContainer:{
        fontSize:25,
        backgroundColor: 'pink',
        textAlign:'center',
        textAlignVertical:'center',
        width: 60,
        height: 60,
        borderRadius: 100,
        marginBottom:15
    }
});