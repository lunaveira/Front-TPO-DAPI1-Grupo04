import React, { useState } from 'react';
import { ScrollView, View,  StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function FiltersMovies() {
  const [branch, setBranch] = useState("Sucursal");
  const [title, setTitle] = useState("Titulo");
  const [genre, setGenre] = useState("Género");
  const [rating, setRating] = useState("Calificacion");
  const navigation = useNavigation();

  return (
    <ScrollView  className="px-5 bg-gray-900 h-screen" contentContainerStyle={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={branch}
        onValueChange={(itemValue, itemIndex) => setBranch(itemValue)}
      >
        <Picker.Item label="Sucursal" value="Sucursal" />
        <Picker.Item label="Sucursal 1" value="Sucursal 1" />
        <Picker.Item label="Sucursal 2" value="Sucursal 2" />
      </Picker>

      <Picker
        style={styles.picker}
        selectedValue={title}
        onValueChange={(itemValue, itemIndex) => setTitle(itemValue)}
      >
        <Picker.Item label="Titulo" value="Titulo" />
        <Picker.Item label="La Sirenita" value="La Sirenita" />
        <Picker.Item label="El Caballero Oscuro" value="El Caballero Oscuro" />
      </Picker>

      <Picker
        style={styles.picker}
        selectedValue={rating}
        onValueChange={(itemValue, itemIndex) => setRating(itemValue)}
      >
        <Picker.Item label="Calificacion" value="Calificacion" />
        <Picker.Item label="Menor a 3" value="Menor a 3" />
        <Picker.Item label="Mayor a 3" value="Mayor a 3" />
      </Picker>

      <Picker
        style={styles.picker}
        selectedValue={genre}
        onValueChange={(itemValue, itemIndex) => setGenre(itemValue)}
      >
        <Picker.Item label="Genero" value="Genero" />
        <Picker.Item label="Acción" value="Acción" />
        <Picker.Item label="Fantasía" value="Fantasía" />
      </Picker>

      <Button
        title="Aplicar"
        buttonStyle={{
          backgroundColor: 'red',
          borderRadius: 10
        }}
        handler={() => navigation.navigate({ name: 'Main User' })} 
      />


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgb(17, 24, 39)',
  },
  picker: {
    height: 40,
    width: '80%',
    backgroundColor: 'gray',
    marginBottom: 10,
    borderRadius: 10,
    color: 'white',
  },
});

