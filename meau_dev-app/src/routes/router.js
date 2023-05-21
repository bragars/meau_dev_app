import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigationState } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { verifyToken } from "../../services/user";
import Login from "../views/register/login";
import AnimalRegisterScreen from "../views/register/animalRegister";
import PersonalRegisterScreen from "../views/register/personalRegister";
import HomeScreen from "../views/home/home";
import MyAnimals from "../views/myAnimals";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const NotAuthUserDrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home"  component={HomeScreen} />
      <Drawer.Screen name="Login" component={Login}      />
    </Drawer.Navigator>
  );
};

const DrawerNavigation = ({ isValidToken }) => {
  if (isValidToken) {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen
          name="Cadastro Pessoal"
          component={PersonalRegisterScreen}
        />
        <Drawer.Screen
          name="Cadastro Animal"
          component={AnimalRegisterScreen}
        />
        <Drawer.Screen
          name="Meus Pets"
          component={MyAnimals}
        />
      </Drawer.Navigator>
    );
  } else {
    return <NotAuthUserDrawerNavigation />;
  }
};

export const Router = ({ navigation }) => {
  const userToken = useSelector((state) => state.token);
  const navigationState = useNavigationState((state) => state);
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    const verifyUserToken = async () => {
      const tokenIsValid = await verifyToken(userToken);
      setIsValidToken(tokenIsValid);
    };

    verifyUserToken();
  }, [userToken, navigationState]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer">
        {(props) => <DrawerNavigation {...props} isValidToken={isValidToken} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
