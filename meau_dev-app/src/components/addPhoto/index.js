import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.style';

const AddPhoto = () => {
  return (
    <View style={styles.container}>
      <Image style={{
            resizeMode: 'stretch',
            height: 24,
            width: 24,
          }} source={require('../../../assets/control-point_119259.png')} />
      <Text style={styles.text}> Adicionar Foto</Text>
    </View>
  );
}

export default AddPhoto;
