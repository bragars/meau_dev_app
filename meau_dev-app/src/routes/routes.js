import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../views/register/login";
import AnimalRegisterScreen from "../views/register/animalRegister";
import PersonalRegisterScreen from "../views/register/personalRegister";
import HomeScreen from "../views/home/home";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='Login' component={Login} />
            <Drawer.Screen name="Cadastro Pessoal" component={PersonalRegisterScreen} />
            <Drawer.Screen name="Cadastro Animal" component={AnimalRegisterScreen} />
        </Drawer.Navigator>
    )
}
export function Router() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}
