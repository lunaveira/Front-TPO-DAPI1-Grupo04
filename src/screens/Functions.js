import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";

const Functions = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const [idSala, setIdSala] = useState([]);
  const { id_sucursal, numero_sala } = route.params;


  useEffect(() => {
    const fetchCinemaRoomById = async () => {
      try {
        const response = await fetch(`https://backendmobile-production.up.railway.app/${id_sucursal}/cinema-room/${numero_sala}/getbyid`);

        if (response.ok) {
          const resultado = await response.json();
          setIdSala(resultado);
          console.log('Datos de la sala:', resultado); // Imprimir los datos de la sala en la consola
          // Aquí puedes hacer cualquier operación con los datos de la sala obtenidos
        } else {
          console.error('Error al obtener los datos de la sala:', response.status);
          // Aquí puedes manejar el error de acuerdo a tus necesidades
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        // Aquí puedes manejar el error de acuerdo a tus necesidades
      }
    };
    fetchCinemaRoomById();
  }, []);
  console.log(idSala.id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://backendmobile-production.up.railway.app/api/functions/${idSala.id}`);
        const result = await response.json();
        console.log('Datos de la funcion:',result);
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
      <Button title="Crear función" onPress={() => navigation.navigate({ name: 'Create Function' })} />
      {props.data.map((data) => (
        <TouchableOpacity key={data.id} onPress={() => props.handler(cinemaRoom.numero_sala)}>
          <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
            <Text className="text-white">{cinemaRoom.numero_sala}</Text>
          </View>
        </TouchableOpacity>
))}
      /{data && (
        <View>
          {data.map((data) => (
            <View>
              <TouchableOpacity onPress={() => navigation.navigate({ name: 'Functions Detail' })}>
                <View key={data.id} className="rounded-lg border-white place-items-start ml-2 border-2 w-720 h-12 mt-10">
                  <Text className="text-white text-base">{data.nombre_pelicula} - {data.dia}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate({ name: 'Functions Detail' })}>
                <View key={data.id} className="rounded-lg border-white place-items-start ml-2 border-2 w-720 h-12 mt-10">
                  <Text className="text-white text-base">{data.nombre_pelicula}</Text>
                  <Text>Día: {data.dia}</Text>
                  <Text>Horario: {data.horario}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default Functions;
