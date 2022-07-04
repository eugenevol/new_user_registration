import React,{useEffect, useState} from 'react';
import { Text,
 View,
  StyleSheet,
  TextInput,
  Button,
  

   } from 'react-native';
import Constants from 'expo-constants';

import {gStyle} from './style/style'

// You can import from local files


export default function App() {

function User_login(){

const token = "65effdb908ae5fe1b1fdd0e742923fcaadd1e171"

//Получить токен

let url='https://tokenauthapi.eugenevolkov.repl.co/api-token-auth/'

const [nameLogin, setnameLogin] = React.useState('');
const [passLogin, setpassLogin] = React.useState('');
const [usertoken, setUserToken] = React.useState('');



const get_token = async () => {

  // console.log('jjj')


  console.log(`${nameLogin} ${passLogin}`)

     try {
      const response = await fetch(url,{
        
        
        
         method: 'POST', 
    // mode: 'cors', 
    body:JSON.stringify(
      
      
      {'username':`${nameLogin}`,
    
    'password':`${passLogin}`
    }),

    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    
        
        });
      const json = await response.json();
      console.log(json);
      setUserToken(JSON.stringify(json))
    } catch (error) {
      console.error(error);
     

    } 
  }



  

  function clear_fields() {
    setnameLogin('');
    setpassLogin('');
   
  }


return (
    <View>
      <TextInput
        value={nameLogin}
        placeholder="Введите логин"
        onChangeText={setnameLogin}
        style={gStyle.input}
      />
      <TextInput
        value={passLogin}
        placeholder="Введите пароль"
        onChangeText={setpassLogin}
        multiline
        style={gStyle.input}
      />
      
      <Button title="Отправить" onPress={get_token} />

      <Text>{usertoken}</Text>

    </View>
  );







}


return(

  <User_login/>
)

  




}
  



const styles = StyleSheet.create({
  header: {
    height: 69,

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    paddingBottom: 0,
    backgroundColor: 'white',
  },

  logo: {
    maxWidth: 300,
    widht: '100%',
    height: 69,
  },

  bg: {
    flex: 1,
  },

  app: {
    flex: 1,
  },

  todo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10px',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
  },

  text: {
    fontSize: 18,
  },

  textInput: {
    padding: 15,
    margin: 15,
    background: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  filmItem: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 20,
  },
  Image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  title: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 500,
    textAling: 'center',
  },

  Modal: {
    margin: 25,
  },

  close: {
    fontSize: 30,
    textAlign: 'right',
  },
  modalImg: {
    widht: 300,
    height: 300,
    resizeMode: 'contain',
    display: 'flex',
    alignSelf: 'center',
  },
  overview: {
    fontSize: 18,
    marginTop: 25,
  },
});