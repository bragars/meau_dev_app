import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/views/register/login';
import PersonalRegisterScreen from './src/views/personalRegister';
import NotAuthErrorScreen from './src/views/notAuthErrorScreen';
import { useFonts } from 'expo-font';
import AnimalRegisterScreen from './src/views/register/animalRegister';

const customFonts = {
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts(customFonts);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro Pessoal" component={PersonalRegisterScreen} />
        <Stack.Screen name="Cadastro" component={NotAuthErrorScreen} />
        <Stack.Screen name="Cadastro Animal" component={AnimalRegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
