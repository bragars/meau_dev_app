import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles.style';

const AnimalRegisterScreen = ({ navigation }) => {
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
                    <Text style={styles.textInfo}>Tenho interesse em cadastrar animar para:</Text>
                </View>
                <SafeAreaView style={styles.inLine}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText} >ADOÇÃO</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <Text style={styles.spaceWithLine}></Text>
                <Text style={styles.bold}>Adoção</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Animal"
                    value={name}
                    onChangeText={setName}
                />
                <TouchableOpacity style={styles.buttonCadastro} >
                    <Text style={styles.buttonText} >COLOCAR PARA ADOÇÃO</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
};

export default AnimalRegisterScreen;