import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import AddPhoto from '../../components/addPhoto';
import styles from './styles.style';

const PersonalRegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');

  const handleRegister = () => {
    checkAuth();
    console.log(username);
    console.log(password);
  };

  const checkAuth = () => {
    // check future headers
    console.log('pressed')
    // navigate('Cadastro'); // <- navigation to Main screen
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
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          secureTextEntry={true}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          secureTextEntry={true}
          value={state}
          onChangeText={setState}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          secureTextEntry={true}
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          secureTextEntry={true}
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Numero"
          secureTextEntry={true}
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          secureTextEntry={true}
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')} >
          <Text style={styles.buttonText} >Fazer Cadastro </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalRegisterScreen;
