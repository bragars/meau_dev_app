import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { getUserAnimals } from "../../../services/user_animal";
import { useSelector } from "react-redux";
import AnimalCard from "../../components/animalCard"
import styles from "./styles.style";

const MyAnimals = ({ navigation }) => {
  const userToken = useSelector((state) => state.token);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    console.log("getUserAnimals - useEffect");
    setAnimals(getUserAnimals(userToken));
  }, [])

  return (
    <View style={styles.container}>
      {animals.length > 0 && animals.map((animal, index) => (
        <View key={index}>
          <AnimalCard animal={animal} />
        </View>
      ))}
    </View>
  );
};

export default MyAnimals;
