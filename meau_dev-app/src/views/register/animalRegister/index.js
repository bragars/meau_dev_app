import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper'
import styles from './styles.style';
import { create as createAnimal } from '../../../../services/animal';

const AnimalRegisterScreen = ({ navigation }) => {
    const [checked1, setChecked1]   = useState(false);
    const [checked2, setChecked2]   = useState(false);
    const [checked3, setChecked3]   = useState(false);
    const [checked4, setChecked4]   = useState(false);
    const [checked5, setChecked5]   = useState(false);
    const [checked6, setChecked6]   = useState(false);
    const [checked7, setChecked7]   = useState(false);
    const [checked8, setChecked8]   = useState(false);
    const [checked9, setChecked9]   = useState(false);
    const [checked10, setChecked10] = useState(false);

    const [checked01, setChecked01]   = useState(false);
    const [checked02, setChecked02]   = useState(false);
    const [checked03, setChecked03]   = useState(false);
    const [checked04, setChecked04] = useState(false);
    const [checked05, setChecked05] = useState(false);
    const [checked06, setChecked06] = useState(false);
    const [checked07, setChecked07] = useState(false);

    const [temperance, setTemperance] = useState([]);
    const [guard, setGuard] = useState([]);
    const [health, setHealth] = useState([]);

    const [specie, setSpecie]       = useState('');
    const [gender, setGender]       = useState('');
    const [animal, setAnimal]       = useState('');
    const [name, setName]           = useState('');
    const [size, setSize]           = useState('');
    const [age, setAge]             = useState('');
    
    const handleRegister = () => {
        checkAuth();
        setAnimalFields();
        console.log(animal);
        createAnimal(animal);
    };

    const checkAuth = () => {
        console.log('pressed');
        // navigate('Cadastro'); // <- navigation to Main screen
    };

    const setAnimalFields = () => {
        console.log(name);
        setAnimal({
            name: name,
            specie: specie,
            gender: gender,
            size: size,
            age: age,
            temperance: temperance,
            guard: guard,
            health: health
        });
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
                <Text>Fotos do animal</Text>
                <AddPhoto></AddPhoto>
                <RadioButton.Group onValueChange={specie => setSpecie(specie)} value={specie}>
                    <Text>Espécie</Text>
                    <View style={styles.row}>
                        <RadioButton.Item label="Cachorro" value="Cachorro" style={styles.margin} />
                        <RadioButton.Item label="Gato" value="Gato" style={styles.margin} />
                    </View>
                </RadioButton.Group>
                <RadioButton.Group onValueChange={gender => setGender(gender)} value={gender}>
                    <Text>Sexo</Text>
                    <View style={styles.row}>
                        <RadioButton.Item label="Macho" value="Macho" style={styles.margin} />
                        <RadioButton.Item label="Fêmea" value="Fêmea" style={styles.margin} />
                    </View>
                </RadioButton.Group>
                <RadioButton.Group onValueChange={size => setSize(size)} value={size}>
                    <Text>Porte</Text>
                    <View style={styles.row}>
                        <RadioButton.Item label="Pequeno" value="Pequeno" style={styles.margin} />
                        <RadioButton.Item label="Médio" value="Médio" style={styles.margin} />
                        <RadioButton.Item label="Grande" value="Grande" style={styles.margin} />
                    </View>
                </RadioButton.Group>
                <RadioButton.Group onValueChange={age => setAge(age)} value={age}>
                    <Text>Idade</Text>
                    <View style={styles.row}>
                        <RadioButton.Item label="Filhote" value="Filhote" style={styles.margin} />
                        <RadioButton.Item label="Adulto" value="Adulto" style={styles.margin} />
                        <RadioButton.Item label="Idoso" value="Idoso" style={styles.margin} />
                    </View>
                </RadioButton.Group>
                <Text>Temperamento</Text>
                <View style={styles.row}>
                    <Checkbox.Item
                        label='Brincalhão'
                        status={checked1 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setTemperance(oldArray => [...oldArray, 'Brincalhão']), 
                            setChecked1(!checked1)
                        }}
                        style={styles.margin}
                    />
                    <Checkbox.Item
                        label='Tímido'
                        status={checked2 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setTemperance(oldArray => [...oldArray, 'Tímido']), 
                            setChecked2(!checked2)
                        }}
                    />
                    <Checkbox.Item
                        label='Calmo'
                        status={checked3 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setTemperance(oldArray => [...oldArray, 'Calmo']), 
                            setChecked3(!checked3)
                        }}
                    />
                </View>
                <View style={styles.row}>
                    <Checkbox.Item
                        label='Guarda'
                        status={checked4 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setGuard(oldArray => [...oldArray, 'Guarda']), 
                            setChecked4(!checked4)
                        }}
                        style={styles.margin}
                    />
                    <Checkbox.Item
                        label='Amoroso'
                        status={checked5 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setGuard(oldArray => [...oldArray, 'Amoroso']), 
                            setChecked5(!checked5)
                        }}
                    />
                    <Checkbox.Item
                        label='Preguiçoso'
                        status={checked6 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setGuard(oldArray => [...oldArray, 'Preguiçoso']), 
                            setChecked6(!checked6)
                        }}
                    />
                </View>
                <Text>Saúde</Text>
                <View style={styles.row}>
                    <Checkbox.Item
                        label='Vacinado'
                        status={checked7 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setHealth(oldArray => [...oldArray, 'Vacinado']), 
                            setChecked7(!checked7)
                        }}
                        style={styles.margin}
                    />
                    <Checkbox.Item
                        label='Vermifugado'
                        status={checked8 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setHealth(oldArray => [...oldArray, 'Vermifugado']), 
                            setChecked8(!checked8)
                        }}
                    />
                </View>
                <View style={styles.row}>
                    <Checkbox.Item
                        label='Castrado'
                        status={checked9 ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setHealth(oldArray => [...oldArray, 'Castrado']), 
                            setChecked9(!checked9)
                        }}
                    />
                    <Checkbox.Item
                        label='Doente'
                        status={checked10 ? 'checked' : 'unchecked'}
                        onPress={() => {setHealth(oldArray => [...oldArray, 'Doente']), setChecked10(!checked10)}}
                    />
                </View>
                <Text>Doenças do animal</Text>
                <Text>EXIGÊNCIAS PARA ADOÇÃO</Text>
                <Checkbox.Item
                    label='Termo de adoção'
                    status={checked01 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked01(!checked01)}
                    style={styles.margin}
                />
                <Checkbox.Item
                    label='Fotos da casa'
                    status={checked02 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked02(!checked02)}
                />
                <Checkbox.Item
                    label='Visita prévia do animal'
                    status={checked03 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked03(!checked03)}
                />
                <Checkbox.Item
                    label='Acompanhamento pós adoção'
                    status={checked04 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked04(!checked04)}
                />
                <Checkbox.Item
                    label='1 mês'
                    status={checked05 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked05(!checked05)}
                />
                 <Checkbox.Item
                    label='3 meses'
                    status={checked06 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked06(!checked06)}
                />
                 <Checkbox.Item
                    label='6 meses'
                    status={checked07 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked07(!checked07)}
                />
                <TouchableOpacity 
                    onPress={() => { handleRegister() }}
                    style={styles.buttonCadastro} >
                    <Text style={styles.buttonText} >COLOCAR PARA ADOÇÃO</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
};

export default AnimalRegisterScreen;
