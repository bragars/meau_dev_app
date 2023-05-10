import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  const authErrorAlert = () => {
    Alert.alert('Erro de autenticação', 'Usuário não existe', 
    [ {text: 'OK', onPress: () => console.log('OK Pressed')} ]);
  };

  const loginFireBase = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorLogin(error);
        authErrorAlert();
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        placeholder='Email'
        style={styles.textInput}
        type="text"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder='Senha'
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={text => setPassword(text)}
        value={password} />
      <TouchableOpacity
        style={styles.entrar}
        onPress={() => loginFireBase()}
      >
        <Text style={{ color: '#434343', textAlign: 'center', fontSize: 10 }} >ENTRAR </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebook}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 10, marginStart: 8 }} >ENTRAR COM FACEBOOK </Text>
        <Icon style={{ position: 'absolute', color: 'white', marginStart: 30 }} name='facebook' size={15} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.google} >
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 10 }} >ENTRAR COM GOOGLE </Text>
        <Icon style={{ position: 'absolute', color: 'white', marginStart: 30 }} name='google-' size={15} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  textInput: {
    width: '90%',
    height: 50,
    backgroundColor: '#fafafa',
    marginBottom: 10,
    borderWidth: 1,
    borderRightColor: '#fafafa',
    borderTopColor: '#fafafa',
    borderLeftColor: '#fafafa',
    borderBottomColor: 'grey',
    color: '#bdbdbd',
  },
  entrar: {
    width: '60%',
    height: 40,
    marginTop: 52,
    borderRadius: 3,
    backgroundColor: '#88c9bf',
    justifyContent: 'center',

  },
  facebook: {
    width: '60%',
    height: 40,
    marginTop: 72,
    borderRadius: 3,
    backgroundColor: '#194f7c',
    justifyContent: 'center',
    marginBottom: 8
  },
  google: {
    width: '60%',
    height: 40,
    borderRadius: 3,
    backgroundColor: '#f15f5c',
    justifyContent: 'center',
    marginBottom: 10
  }
});
