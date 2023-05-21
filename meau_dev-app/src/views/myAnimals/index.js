import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { getUserAnimals } from "../../../services/user_animal";
import AnimalCard from "../../components/animalCard"
import styles from "./styles.style";

const MyAnimals = ({ navigation }) => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAnimals(await getUserAnimals());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
