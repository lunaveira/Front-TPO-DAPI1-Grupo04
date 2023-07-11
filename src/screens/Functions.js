import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ListFunctions from '../components/ListFunctions';
import HomeButton from '../components/HomeButton';

const Functions = ({ navigation, route }) => {
  const { id_sucursal, numero_sala } = route.params;
  const [idSala, setIdSala] = useState(null);
  const [funciones, setFunciones] = useState([]);

  useEffect(() => {
    const fetchCinemaRoomById = async () => {
      try {
        const response = await fetch(`https://backendmobile-production.up.railway.app/${id_sucursal}/cinema-room/${numero_sala}/getbyid`);

        if (response.ok) {
          const resultado = await response.json();
          setIdSala(resultado);
          console.log('Datos de la sala:', resultado);
        } else {
          console.error('Error al obtener los datos de la sala:', response.status);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchCinemaRoomById();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (idSala?.id) {
          const response = await fetch(`https://backendmobile-production.up.railway.app/api/functions/${idSala.id}`);
          const result = await response.json();
          console.log('Datos de la función:', result);
          setFunciones(result.funciones);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [idSala]);

  console.log('id_sala:', idSala?.id);

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}>
      <Text style={{ color: 'white', marginTop: 10, fontSize: 20 }}>Funciones</Text>

      <View className='mb-10 mt-5'>
      <HomeButton color='red' title="Crear función" handler={() => navigation.navigate('Create Function', { id_sala: idSala?.id })} />

      </View>

      {funciones.length > 0 ? (
        <ListFunctions funciones={funciones} idSala={idSala?.id} />
      ) : (
        <Text style={{ color: 'white' }}>No se encontraron funciones</Text>
      )}
    </ScrollView>
  );
};

export default Functions;
