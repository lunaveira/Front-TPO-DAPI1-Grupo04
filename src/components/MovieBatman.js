import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default function MovieLogo({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={require('../images/theDarkKnight.png')} />
      <Text style={styles.logoText}>El caballero oscuro</Text>
    </View>
  );
};
