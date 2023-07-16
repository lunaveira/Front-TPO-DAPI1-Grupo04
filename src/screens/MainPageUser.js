import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MainPageUser({ route }) {
  const [Busqueda, setBusqueda] = useState('');
  const [funciones, setFunciones] = useState([]);
  const [funcionesFiltradas, setFuncionesFiltradas] = useState([]);
  const navigation = useNavigation();
  const title = route.params;
  const { user_email } = route.params;
  console.log(user_email);
  console.log(title)
 
  useEffect(() => {
    fetchFunciones();
  }, []);

  const fetchFunciones = async () => {
    try {
      const response = await fetch('https://backendmobile-production.up.railway.app/api/functions');
      if (response.ok) {
        const data = await response.json();
        setFunciones(data);
        setFuncionesFiltradas(data);
      } else {
        console.error('Error al obtener las funciones:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  
  useEffect(() => {
    filterFunciones();
  }, [Busqueda]);

  const filterFunciones = () => {
    if (Busqueda.trim() === '') {
      setFuncionesFiltradas(funciones);
    } else {
      const filteredFunciones = funciones.filter((funcion) =>
        funcion.pelicula.toLowerCase().includes(Busqueda.toLowerCase())
      );
      setFuncionesFiltradas(filteredFunciones);
    }
  };

  const renderFuncionItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Movie Details',{mail:user_email, id_funcion:item.id } )}>
      <View style={styles.funcionContainer}>
        <Image style={styles.funcionImage} source={{ uri: `data:image/jpeg;base64,${item.imagen}` }} resizeMode="stretch" />
        <Text style={styles.funcionText}>{item.pelicula}</Text>
      </View>
    </TouchableOpacity>
  ); 
  
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>¿Qué te gustaría ver?</Text>
        <TextInput
          style={styles.textInput}
          value={Busqueda}
          onChangeText={setBusqueda}
          placeholder="Buscar..."
          placeholderTextColor="white"
        />
      </View>
      <FlatList
        data={funcionesFiltradas}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFuncionItem}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(17 24 39)',
  },
  headingContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  headingText: {
    color: 'white',
    fontSize: 18,
  },
  textInput: {
    height: 44,
    width: 200,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 22,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  flatListContent: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  funcionContainer: {
    alignItems: 'center',
  },
  funcionImage: {
    height: 150,
    width: 130,
    marginRight: 5,
  },
  funcionText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});


