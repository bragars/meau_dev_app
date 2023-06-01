import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles.style";

const AnimalCard = ({ animal }) => {
  return (
    <>
      <View style={styles.container}>
        {
          animal.imageBase64 !== '' ?
          <>
            <Image source={{ uri: animal.imageBase64 }} style={{ width: 200, height: 200 }} />
            <Text> {animal.name} </Text>
          </>
          : <Text> {animal.name} </Text>
        }
      </View>
    </>
  );
};

export default AnimalCard;
