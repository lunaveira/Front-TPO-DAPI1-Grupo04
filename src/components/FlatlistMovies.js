import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Button } from 'react-native';

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
    <Button title='prueba'onPress={() => navigation.navigate({ name: 'Cinema Rooms' })} style={styles.gridItem}>
      <Text>{item.calle}</Text>
    </Button>
  );
};

const FlatlistMovies = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.branches}
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
