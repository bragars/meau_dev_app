import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper'
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

    const [especie, setEspecie] = useState('');
    const [sexo, setSexo] = useState('');

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);

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
                <Text>Fotos do animal</Text>
                <AddPhoto></AddPhoto>
                <RadioButton.Group onValueChange={newEspecie => setEspecie(newEspecie)} value={especie}>
                    <Text>Espécie</Text>
                    <View style={styles.row}>
                        <RadioButton.Item label="Cachorro" value="first" style={styles.margin} />
                        <RadioButton.Item label="Gato" value="second" style={styles.margin} />
                    </View>
                </RadioButton.Group>
                <RadioButton.Group onValueChange={newEspecie => setEspecie(newEspecie)} value={especie}>
                    <Text>Sexo</Text>
                    <View style={styles.row}>
                        <RadioButton.Item label="Macho" value="first" style={styles.margin} />
                        <RadioButton.Item label="Fêmea" value="second" style={styles.margin} />
                    </View>
                </RadioButton.Group>
                <RadioButton.Group onValueChange={newEspecie => setEspecie(newEspecie)} value={especie}>
                    <Text>Porte</Text>
                    <View style={styles.row}>
                        <RadioButton.Item label="Pequeno" value="first" style={styles.margin} />
                        <RadioButton.Item label="Médio" value="second" style={styles.margin} />
                        <RadioButton.Item label="Grande" value="second" style={styles.margin} />
                    </View>
                </RadioButton.Group>
                <RadioButton.Group onValueChange={newEspecie => setEspecie(newEspecie)} value={especie}>
                    <Text>Idade</Text>
                    <View style={styles.row}>
                        <RadioButton.Item label="Filhore" value="first" style={styles.margin} />
                        <RadioButton.Item label="Adulto" value="second" style={styles.margin} />
                        <RadioButton.Item label="Idoso" value="second" style={styles.margin} />
                    </View>
                </RadioButton.Group>
                <Text>Temperamento</Text>
                <View style={styles.row}>
                    <Checkbox.Item
                        label='Brincalão'
                        status={checked1 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked1(!checked1)}
                        style={styles.margin}
                    />
                    <Checkbox.Item
                        label='Tímido'
                        status={checked2 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked2(!checked2)}
                    />
                    <Checkbox.Item
                        label='Calmo'
                        status={checked3 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked3(!checked3)}
                    />
                </View>
                <View style={styles.row}>
                    <Checkbox.Item
                        label='Guarda'
                        status={checked1 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked1(!checked1)}
                        style={styles.margin}
                    />
                    <Checkbox.Item
                        label='Amoroso'
                        status={checked2 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked2(!checked2)}
                    />
                    <Checkbox.Item
                        label='Preguiçoso'
                        status={checked3 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked3(!checked3)}
                    />
                </View>
                <Text>Saúde</Text>
                <View style={styles.row}>
                    <Checkbox.Item
                        label='Vacinado'
                        status={checked1 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked1(!checked1)}
                        style={styles.margin}
                    />
                    <Checkbox.Item
                        label='Vermifugado'
                        status={checked2 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked2(!checked2)}
                    />
                </View>
                <View style={styles.row}>
                    <Checkbox.Item
                        label='Castrado'
                        status={checked3 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked3(!checked3)}
                    />
                    <Checkbox.Item
                        label='Doente'
                        status={checked3 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked3(!checked3)}
                    />
                </View>
                <Text>Doenças do animal</Text>
                <Text>EXIGÊNCIAS PARA ADOÇÃO</Text>
                <Checkbox.Item
                    label='Termo de adoção'
                    status={checked1 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked1(!checked1)}
                    style={styles.margin}
                />
                <Checkbox.Item
                    label='Fotos da casa'
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked2(!checked2)}
                />
                <Checkbox.Item
                    label='Visita prévia do animal'
                    status={checked3 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked3(!checked3)}
                />
                <Checkbox.Item
                    label='Acompanhamento pós adoção'
                    status={checked3 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked3(!checked3)}
                />
                <Checkbox.Item
                    label='1 mês'
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked2(!checked2)}
                />
                 <Checkbox.Item
                    label='3 meses'
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked2(!checked2)}
                />
                 <Checkbox.Item
                    label='6 meses'
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked2(!checked2)}
                />
                <TouchableOpacity style={styles.buttonCadastro} >
                    <Text style={styles.buttonText} >COLOCAR PARA ADOÇÃO</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
};

export default AnimalRegisterScreen;