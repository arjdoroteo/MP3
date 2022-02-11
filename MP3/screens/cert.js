import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Alert,Pressable, TextInput} from 'react-native';
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

  const [trackLastName, setTrackLastName] = useState('');
  const [trackBday, setTrackBday] = useState('');
  let deets = []

    const trackHandler = async () => {
            try {
                let person = await AsyncStorage.getItem('user')
                person = JSON.parse(person)
                for (const key in person) {
                    deets.push(JSON.stringify(`${person[key]}`))
                }
                if ((trackLastName == '')||(trackBday == '')){
                    Alert.alert('Notice','Please fill out all the fields.')
                }
                else if((trackLastName == deets[0].replace(/["]/g,''))&&(trackBday == deets[4].replace(/["]/g,''))){
                    setLastName(deets[0].replace(/["]/g,''))
                    setFirstName(deets[1].replace(/["]/g,''))
                    setMiddleName(deets[2].replace(/["]/g,''))
                    setSuffix(deets[3].replace(/["]/g,''))
                    setBirthdate(deets[4].replace(/["]/g,''))
                    setfirstSelectedCity(deets[5].replace(/["]/g,''))
                    setFirstDose(deets[6].replace(/["]/g,''))
                    setsecondSelectedCity(deets[7].replace(/["]/g,''))
                    setSecondDose(deets[8].replace(/["]/g,''))
                    setthirdSelectedCity(deets[9].replace(/["]/g,''))
                    setThirdDose(deets[10].replace(/["]/g,''))
                }

                else{
                    Alert.alert('Notice','No match found.')
                }
            }
            catch(e){
                alert(e)
            }
        }
    return (
        <ScrollView style={styles.rootContainer}>
            <View style={styles.upperInputContainer}>
                <Text style={{fontSize:16, color:'blue'}}>Enter your Last Name and Birthdate to track your certificate.</Text>
                <View>
                    <TextInput style={styles.inputText} placeholder= 'Last Name' onChangeText={(val) => {setTrackLastName(val)}}></TextInput>
                    <TextInput style={styles.inputText} placeholder= 'Birthdate' onChangeText={(val) => {setTrackBday(val)}}></TextInput>
                </View>
            </View>
            <View style={styles.upperContainer}> 
                <View>
                <Image source={require('../assets/logo.png')} style={{width:340, height:55, marginBottom:30, marginTop:10}}/>
                </View>
                <Text style={styles.labelstyle}>Last Name:</Text>
                <Text style={styles.datalabelstyle}>{lastName}</Text>

                <Text style={styles.labelstyle}>First Name:</Text>
                <Text style={styles.datalabelstyle}>{firstName}</Text>

                <Text style={styles.labelstyle}>Middle Name:</Text>
                <Text style={styles.datalabelstyle}>{middleName}</Text>

                <Text style={styles.labelstyle}>Suffix:</Text>
                <Text style={styles.datalabelstyle}>{suffix}</Text>

                <Text style={styles.labelstyle}>Birthdate:</Text>
                <Text style={styles.datalabelstyle}>{birthdate}</Text>

                <Text style={styles.labelstyle}>First Dose Location:</Text>
                <Text style={styles.datalabelstyle}>{selectedfirstCity}</Text>

                <Text style={styles.labelstyle}>First Dose Date:</Text>
                <Text style={styles.datalabelstyle}>{firstDose}</Text>

                <Text style={styles.labelstyle}>Second Dose Location:</Text>
                <Text style={styles.datalabelstyle}>{selectedsecondCity}</Text>

                <Text style={styles.labelstyle}>Second Dose Date:</Text>
                <Text style={styles.datalabelstyle}>{secondDose}</Text>

                <Text style={styles.labelstyle}>Additional Dose Location:</Text>
                <Text style={styles.datalabelstyle}>{selectedthirdCity}</Text>

                <Text style={styles.labelstyle}>Additional Dose Date:</Text>
                <Text style={styles.datalabelstyle}>{thirdDose}</Text>
            </View>
            <View style={styles.lowerContainer}>
                <Pressable onPress = {trackHandler} >
                    <Text style={styles.textContainer}>+</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor: 'white',
    },
    upperContainer:{
        flex:10,
        backgroundColor:'white',
        margin:15,
        borderRadius: 25,
        shadowColor:'gray',
        elevation:5,
        borderStyle: 'dashed',
        borderWidth: 1,
        padding:10,
        borderColor:'blue'
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
        backgroundColor:'#edc200',
        textAlign:'center',
        textAlignVertical:'center',
        width: 60,
        height: 60,
        borderRadius: 100,
        marginBottom:15,
        color:'white'
        
    },
    upperInputContainer:{
        flex:10,
        backgroundColor:'white',
        margin:15,
        padding:20,
        borderRadius: 25,
        shadowColor:'gray',
        elevation:5,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor:'blue'
    },
    inputText:{
        borderBottomWidth:1,
        borderBottomColor:'gray',
        backgroundColor:'white',
        width: 200,
        marginTop:15,
        fontSize: 15,

    },
    labelstyle:{
        fontSize: 16,
        marginTop:10,
        color:'blue'
    },
    datalabelstyle:{
        fontSize: 19,
        marginTop:3
    }
});