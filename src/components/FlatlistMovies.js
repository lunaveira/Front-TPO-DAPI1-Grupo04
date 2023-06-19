import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const data = [
  { id: 1, title: 'Hoyts Caballito' },
  { id: 2, title: 'Hoyts Palermo' },
  { id: 3, title: 'Hoyts Devoto' },
  { id: 3, title: 'Hoyts Avellaneda' },
  // Agrega más elementos aquí
];

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;


const renderItem = ({ item }) => {
  return (
    <View style={styles.gridItem}>
      <Text>{item.title}</Text>
    </View>
  );
};

const FlatlistMovies = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    justifyContent: 'space-between',
  },
  gridItem: {
   
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    height: 150,
    width: 140
  },
});

export default FlatlistMovies;
