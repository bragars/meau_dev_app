import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AnimalCard from "../../components/animalCard"
import styles from "./styles.style";
import { getUserAnimals } from "../../../dao/user_animals";

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
        <View key={index} style={styles.pets}>
          <AnimalCard animal={animal} />
        </View>
      ))}
    </View>
  );
};

export default MyAnimals;
