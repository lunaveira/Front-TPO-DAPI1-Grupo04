import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';
import HomeButton from '../components/HomeButton';
import ListFunctions from '../components/ListFunctions';

const Functions = () => {
  const navigation = useNavigation();
  const { id_sucursal, numero_sala } = useRoute().params;
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

  const fetchFunciones = async () => {
    try {
      if (idSala?.id) {
        const response = await fetch(`https://backendmobile-production.up.railway.app/api/functions/${idSala.id}`);
        if (response.ok) {
          const data = await response.json();
          setFunciones(data.funciones);
        } else {
          console.error('Error al obtener las funciones:', response.status);
        }
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  useEffect(() => {
    fetchFunciones();
  }, [idSala]);

  useFocusEffect(() => {
    fetchFunciones();
  });

  const handleFunctionPress = (functionId) => {
    console.log('ID de la función:', functionId);
    navigation.navigate('Functions Detail', { functionId, id_sucursal });
  };

  console.log('id_sala:', idSala?.id);
  const functionIds = funciones.map((funcion) => funcion.id);
  console.log('IDs de las funciones:', functionIds);

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}>
      <Text style={{ color: 'white', marginTop: 10, fontSize: 20 }}>Funciones</Text>

      <View style={{ marginBottom: 10, marginTop: 5 }}>
        <HomeButton color='red' title='Crear función' handler={() => navigation.navigate('Create Function', { id_sala: idSala?.id, id_sucursal, numero_sala })} />
      </View>

      {funciones.length > 0 ? (
        <ListFunctions funciones={funciones} idSala={idSala?.id} onFunctionPress={handleFunctionPress} />
      ) : (
        <Text style={{ color: 'white' }}>No se encontraron funciones</Text>
      )}
    </ScrollView>
  );
};

export default Functions;
