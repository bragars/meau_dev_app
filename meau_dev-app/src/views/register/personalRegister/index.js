import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import AddPhoto from '../../../components/addPhoto';
import { addUser, getUsers } from '../../../../dao/user'

import styles from './styles.style';

const PersonalRegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');

  const [user, setUser] = useState({});

  const handleRegister = () => {
    checkAuth();
    console.log('geere');
    // addUser(name, age, email);
    getUsers();
  };

  const checkAuth = () => {
    // check future headers
    console.log('pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.textInfo}>As informações preenchidas serão divulgadas apenas para a pessoa com a qual você realizar o processo de adoção e/ou apadrinhamento, após a formalização do processo.</Text>
        </View>
        <Text style={styles.registerTitle}> INFORMAÇÕES PESSOAIS</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Idade"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          value={state}
          onChangeText={setState}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Numero"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          />
        <Text style={styles.registerTitle}>Foto de perfil</Text>
        <AddPhoto></AddPhoto>
        {/* <Button needAuth="true" text="Fazer Cadastro" type="greenButton" /> */}
        <TouchableOpacity style={styles.button} 
        onPress={() => {handleRegister(), navigation.navigate('Cadastro')}} >
          <Text style={styles.buttonText} >Fazer Cadastro </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalRegisterScreen;