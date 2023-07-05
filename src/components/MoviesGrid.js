import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', title: 'Elemento 1' },
  { id: '2', title: 'Elemento 2' },
  { id: '3', title: 'Elemento 3' },
  { id: '4', title: 'Elemento 4' },
  { id: '5', title: 'Elemento 5' },
  { id: '6', title: 'Elemento 6' },
  { id: '7', title: 'Elemento 7' },
  { id: '8', title: 'Elemento 8' },
  { id: '9', title: 'Elemento 9' },
  { id: '10', title: 'Elemento 10' },
];

const numColumns = 2;

const MoviesGrid = () => {
  const renderGridItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.gridItem}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
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
    flex: 1,
    margin: 5,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MoviesGrid;

