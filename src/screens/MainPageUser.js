import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeButton from '../components/HomeButton';

export default function MainPageUser({ route }) {
  const [Busqueda, setBusqueda] = useState('');
  const [funciones, setFunciones] = useState([]);
  const [funcionesFiltradas, setFuncionesFiltradas] = useState([]);
  const [userId, setUserId] = useState(null);
  const navigation = useNavigation();
  const title = route.params;
  const { user_email } = route.params;
  console.log(user_email);
  console.log(title)

  useEffect(() => {
    fetchFunciones();
    fetchUserId();
  }, []);

  const fetchUserId = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/api/user/${user_email}/getuserbymail`);
      if (response.ok) {
        const data = await response.json();
        const userId = data[0].id; // Obtener el ID del usuario desde la respuesta
        setUserId(userId);
      } else {
        console.error('Error al obtener el ID del usuario:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

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
    <TouchableOpacity onPress={() => navigation.navigate('Movie Details', { mail: user_email, id_funcion: item.id })}>
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

        <View className=' h-16 justify-center items-center'>
          <HomeButton title='Mis reservas' color='red' handler={() => navigation.navigate('Reservations', { userId })}></HomeButton>
        </View>



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


