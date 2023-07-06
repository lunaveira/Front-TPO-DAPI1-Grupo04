import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from "react-native";
import ListCinemaRoom from "../components/ListCinemaRoom";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atob } from 'react-native-quick-base64';

export default function CinemaRooms({ route }) {
  const [cinemaRooms, setCinemaRooms] = useState([]);
  const [token, setToken] = useState('');
  const [numeroSalaCreada, setNumeroSalaCreada] = useState('');
  const [nombreSucursal, setNombreSucursal] = useState('');

  const { id_sucursal } = route.params;
  const navigation = useNavigation();

  const handlePress = (numeroSala) => {
    navigation.navigate("Cinema Room Detail", { numeroSala });
  };

  useEffect(() => {
    fetchData();
    fetchSucursal();
  }, []);

  const fetchData = async () => {
    try {
      const token_encriptado = await AsyncStorage.getItem('@token');
      const idSocio = JSON.parse(atob(token_encriptado.split('.')[1]));
      setToken(token_encriptado);

      const response = await fetch(`https://backendmobile-production.up.railway.app/api/cinema-room/${id_sucursal}/getall`, {
        headers: {
          Authorization: `Bearer ${token_encriptado}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setCinemaRooms(result);
      } else {
        console.log('Error al obtener el detalle de la sucursal');
      }
    } catch (error) {
      console.error('Error al conectarse con el servidor:', error);
    }
  };

  const fetchSucursal = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/${id_sucursal}/sucursal`);
  
      if (response.ok) {
        const sucursal = await response.json();
        console.log('Datos de la sucursal:', sucursal); // Verificar los datos de la sucursal en la consola
        setNombreSucursal(sucursal.nombre); // Asignar el nombre de la sucursal al estado
      } else {
        console.log('Error al obtener los detalles de la sucursal');
      }
    } catch (error) {
      console.error('Error al conectarse con el servidor:', error);
    }
  };
  

  return (
    <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'white', fontSize: 16 }}>Estás en la sucursal {nombreSucursal}</Text>
  
      <Button title="Crear sala" onPress={() => navigation.navigate('Create Cinema Room', { id_sucursal: id_sucursal })} />
      <Text className="text-center text-lg text-white mt-5">Tus salas</Text>
      <ListCinemaRoom cinemaRooms={cinemaRooms} handler={handlePress} />
    </View>
  );
}
