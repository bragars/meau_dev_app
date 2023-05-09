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
    const [specie, setSpecie]       = useState('');
    const [gender, setGender]       = useState('');
    const [animal, setAnimal]       = useState('');
    const [name, setName]           = useState('');
    const [size, setSize]           = useState('');
    const [age, setAge]             = useState('');
    
    const handleRegister = () => {
        checkAuth();
        setAnimalFields();
        createAnimal(animal);
    };

    const checkAuth = () => {
        console.log('pressed')
        // navigate('Cadastro'); // <- navigation to Main screen
    };

    const setAnimalFields = () => {
        setAnimal({
            name: name,
            specie: specie,
            gender: gender,
            size: size,
            age: age,
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
                        <RadioButton.Item label="Cachorro" value="first" style={styles.margin} />
                        <RadioButton.Item label="Gato" value="second" style={styles.margin} />
                    </View>
                </RadioButton.Group>
                <RadioButton.Group onValueChange={gender => setGender(gender)} value={gender}>
                    <Text>Sexo</Text>
                    <View style={styles.row}>
                        <RadioButton.Item label="Macho" value="first" style={styles.margin} />
                        <RadioButton.Item label="Fêmea" value="second" style={styles.margin} />
                    </View>
                </RadioButton.Group>
                <RadioButton.Group onValueChange={size => setSize(size)} value={size}>
                    <Text>Porte</Text>
                    <View style={styles.row}>
                        <RadioButton.Item label="Pequeno" value="first" style={styles.margin} />
                        <RadioButton.Item label="Médio" value="second" style={styles.margin} />
                        <RadioButton.Item label="Grande" value="second" style={styles.margin} />
                    </View>
                </RadioButton.Group>
                <RadioButton.Group onValueChange={age => setAge(setAge)} value={age}>
                    <Text>Idade</Text>
                    <View style={styles.row}>
                        <RadioButton.Item label="Filhote" value="first" style={styles.margin} />
                        <RadioButton.Item label="Adulto" value="second" style={styles.margin} />
                        <RadioButton.Item label="Idoso" value="second" style={styles.margin} />
                    </View>
                </RadioButton.Group>
                <Text>Temperamento</Text>
                <View style={styles.row}>
                    <Checkbox.Item
                        label='Brincalhão'
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
                        status={checked4 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked4(!checked4)}
                        style={styles.margin}
                    />
                    <Checkbox.Item
                        label='Amoroso'
                        status={checked5 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked5(!checked5)}
                    />
                    <Checkbox.Item
                        label='Preguiçoso'
                        status={checked6 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked6(!checked6)}
                    />
                </View>
                <Text>Saúde</Text>
                <View style={styles.row}>
                    <Checkbox.Item
                        label='Vacinado'
                        status={checked7 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked7(!checked7)}
                        style={styles.margin}
                    />
                    <Checkbox.Item
                        label='Vermifugado'
                        status={checked8 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked8(!checked8)}
                    />
                </View>
                <View style={styles.row}>
                    <Checkbox.Item
                        label='Castrado'
                        status={checked9 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked9(!checked9)}
                    />
                    <Checkbox.Item
                        label='Doente'
                        status={checked10 ? 'checked' : 'unchecked'}
                        onPress={() => setChecked10(!checked10)}
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