import React, { useEffect, useState } from 'react';
import { View, Text, Button } from "react-native";
import ListCinemaRoom from "../components/ListCinemaRoom";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atob } from 'react-native-quick-base64';

export default function CinemaRooms({ route }) {
  const [cinemaRooms, setCinemaRooms] = useState([]);
  const [token, setToken] = useState('');
  
  const { id_sucursal } = route.params;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Cinema Room Detail");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/${id_sucursal}/cinema-room/getall`);

      if (response.ok) {
        const result = await response.json();
        setCinemaRooms(result);
      } else {
        console.log('Error al obtener el detalle de la sucursal');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <View className="items-center bg-gray-900 h-screen">
      <Text className="text-center text-lg text-white mt-5">Estás en la sucursal</Text>
      <Text className="text-white mt-5">ACA VA EL NOMBRE DE LA SUCURSAL EN LA QUE ESTÁS</Text>
      <Button title="Crear sala" onPress={() => navigation.navigate('Create Cinema Room', { id_sucursal: id_sucursal })} />
      <Text className="text-center text-lg text-white mt-5">Tus salas</Text>
      <ListCinemaRoom cinemaRooms={cinemaRooms} handler={handlePress} />
      
    </View>
  );
}
