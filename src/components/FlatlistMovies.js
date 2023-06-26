import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const numColumns = 2;




const FlatlistMovies = (props) => {

  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    async function handler() {
   
      navigation.navigate('Branches Detail')
       AsyncStorage.removeItem('click_sucursal')
       
       AsyncStorage.setItem('click_sucursal', item[0].id)
       console.log(item)
    }
    return (
      <TouchableOpacity onPress={handler} >
        <View style={styles.gridItem}>
          <Text>{JSON.stringify(item)}</Text>
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
    justifyContent: 'center',
    margin: 20,
    height: 150,
    width: 140,
  },
});

export default FlatlistMovies;
