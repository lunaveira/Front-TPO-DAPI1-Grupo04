import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import ListFunctions from '../components/ListFunctions';

const Functions = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const { id_sucursal, numero_sala } = route.params;
  const id_sala = `${id_sucursal}_${numero_sala}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://backendmobile-production.up.railway.app/api/functions/${id_sala}`);
        const result = await response.json();
        console.log('Datos de las funciones:', result);
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

      <ListFunctions funciones={data} />
    </ScrollView>
  );
};

export default Functions;
