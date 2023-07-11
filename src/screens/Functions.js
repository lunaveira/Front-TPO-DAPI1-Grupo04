import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import ListFunctions from '../components/ListFunctions';

const Functions = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const [idSala, setIdSala] = useState([]);
  const [funcion, setFuncion] = useState([]);
  const { id_sucursal, numero_sala } = route.params;
  const id_sala = idSala.id;

 

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
        const response = await fetch(`https://backendmobile-production.up.railway.app/api/functions/${id_sala}`);
        const result = await response.json();
        console.log('Datos de la funcion:', result);
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}>
      <Text style={{ color: 'white', marginTop: 10, fontSize: 20 }}>Funciones</Text>
      <Button title="Crear función" onPress={() => navigation.navigate('Create Function', { id_sala: id_sala })} />

      {/* 
      {data && (
        <View>
          {data.map((funcion) => (
            <View key={funcion.id}>
              <TouchableOpacity onPress={() => navigation.navigate({ name: 'Functions Detail' })}>
                <View className="rounded-lg border-white place-items-start ml-2 border-2 w-720 h-12 mt-10">
                  <Text className="text-white text-base">{funcion.nombre_pelicula} - {funcion.dia}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate({ name: 'Functions Detail' })}>
                <View className="rounded-lg border-white place-items-start ml-2 border-2 w-720 h-12 mt-10">
                  <Text className="text-white text-base">{funcion.nombre_pelicula}</Text>
                  <Text>Día: {funcion.dia}</Text>
                  <Text>Horario: {funcion.horario}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )} */}

      <ListFunctions funcion={funcion} />
    </ScrollView>
  );
};

export default Functions;
