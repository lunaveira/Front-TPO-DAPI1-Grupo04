import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import HomeButton from '../components/HomeButton';

export default function FiltersMovies() {
  const [branch, setBranch] = useState("Sucursal");
  const [title, setTitle] = useState("Titulo");
  const [genre, setGenre] = useState("Género");
  const [rating, setRating] = useState("Calificacion");
  const navigation = useNavigation();
  const [sucursales, setSucursales] = useState([]);

  useEffect(() => {
    fetchSucursales();
  }, []);

  const fetchSucursales = async () => {
    try {
      const response = await fetch('https://backendmobile-production.up.railway.app/api/branches');
      if (response.ok) {
        const data = await response.json();
        setSucursales(data);
      } else {
        console.error('Error al obtener las sucursales:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={branch}
        onValueChange={(itemValue, itemIndex) => setBranch(itemValue)}
      >
        <Picker.Item label="Sucursal" value="Sucursal" />
        {sucursales.map((sucursal, index) => (
          <Picker.Item key={index} label={sucursal.nombre} value={sucursal.id} />
        ))}
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

      <HomeButton
        title="Aplicar"
        color='red'
        buttonStyle={{
          backgroundColor: 'red',
          borderRadius: 10
        }}
        handler={() => navigation.navigate('Main User', { branch, title, genre, rating })} 
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


