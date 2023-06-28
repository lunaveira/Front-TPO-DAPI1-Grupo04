import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import GeneralContext from '../context/GeneralContext';

const numColumns = 2;

const FlatlistMovies = (props) => {
  const navigation = useNavigation();
  const { lastTouchedBranchId, setLastTouchedBranchId } = useContext(GeneralContext);

  const renderItem = ({ item }) => {
    async function handler() {
      setLastTouchedBranchId(item.id); // Guarda el ID de la sucursal tocada
      navigation.navigate('Branches Detail');
    }

    return (
      <TouchableOpacity onPress={handler}>
        <View style={styles.gridItem}>
          <Text>{item.nombre}</Text>
          <Image source={{ uri: `data:image/jpeg;base64,${item.imagen}` }} style={styles.image}  />
        </View>
      </TouchableOpacity>
    );
  };

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
    justifyContent: 'space-between',
    height: 150,
    width: 140,
    margin: 2,

  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover'
  },
});

export default FlatlistMovies;
