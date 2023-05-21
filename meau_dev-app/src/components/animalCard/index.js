import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles.style";

const AnimalCard = ({ animal }) => {
  return (
    <View style={styles.container}>
      <Text>
        {animal.name}
      </Text>
    </View>
  );
};

export default AnimalCard;
