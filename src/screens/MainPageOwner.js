import { View, Text, Button, ScrollView } from 'react-native'
import HomeButton from '../components/HomeButton';
import { useEffect, useState } from 'react';
import FlatlistMovies from '../components/FlatlistMovies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atob } from 'react-native-quick-base64';

export default function MainPageOwner({ navigation }) {

  const [branches, setBranches] = useState([]);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem('@token')
      const idSocio = JSON.parse(atob(token.split('.')[1]))
      const response = await fetch(`https://backendmobile-production.up.railway.app/api/cinema/${idSocio.user.id}/branches`);
      const result = await response.json();
      setBranches(result.sucursal);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function getBranches() {

  }

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}>

      <Button title='salas' onPress={() => navigation.navigate({ name: 'Cinema Rooms' })}> </Button>




      <Text className="text-white mt-20 text-base"> ¿Querés crear una nueva sucursal?</Text>
      <HomeButton color="red" title="Crear nueva sucursal" handler={() => navigation.navigate({ name: 'Create Branch' })} />

      <Text className="text-white mt-7 text-base"> Tus sucursales </Text>

      <FlatlistMovies branches={branches} />




    </ScrollView>
  );

}