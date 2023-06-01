import React, { useEffect, useState } from "react";
import { ScrollView, View, Image } from "react-native";
import { getImageBase64 } from "../../../services/animal";
import AnimalCard from "../../components/animalCard"
import styles from "./styles.style";
import { getUserAnimals } from "../../../dao/user_animals";

const MyAnimals = ({ navigation }) => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const animalsData = await getUserAnimals();

        const animalsWithImages = await Promise.all(
          animalsData.map(async (animal) => {
            var imageBase64 = '';
            if (animal.imageRef) {
              imageBase64 = await getImageBase64(animal.imageRef);
            } 
              return { ...animal, imageBase64 };
          })
        )
        console.log(animalsWithImages);
        setAnimals(animalsWithImages);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {animals.length > 0 && animals.map((animal, index) => (
        <View key={index} style={styles.pets}>
          <AnimalCard animal={animal} />
        </View>
      ))}
    </ScrollView>
  );
};

export default MyAnimals;
