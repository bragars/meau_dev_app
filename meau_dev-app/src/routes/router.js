import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigationState } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import Login from "../views/register/login";
import AnimalRegisterScreen from "../views/register/animalRegister";
import PersonalRegisterScreen from "../views/register/personalRegister";
import HomeScreen from "../views/home/home";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen
        name="Cadastro Pessoal"
        component={PersonalRegisterScreen}
      />
      <Drawer.Screen name="Cadastro Animal" component={AnimalRegisterScreen} />
    </Drawer.Navigator>
  );
};

export const Router = ({ navigation }) => {
  const userToken = useSelector((state) => state.token);
  const navigationState = useNavigationState((state) => state);

  useEffect(() => {
    const verifyUserToken = async () => {
      console.log(userToken);
      // if (userToken) {
      //   const currentRoute = navigationState.routes[navigationState.index].name;
      //   // Perform token verification logic for specific screens/routes if needed
      //   if (currentRoute === "Home" || currentRoute === "Profile") {
      //     const isValidToken = await verifyToken(userToken);
      //     if (!isValidToken) {
      //       console.log(token);
      //       // Handle invalid token (e.g., redirect to login screen)
      //       // You can use navigation methods to navigate to the desired screen
      //     }
      //   }
      // }
    };

    verifyUserToken();
  }, [userToken, navigationState]);


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};
