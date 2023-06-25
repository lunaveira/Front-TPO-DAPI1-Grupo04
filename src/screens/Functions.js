import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Functions = ({ navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backendmobile-production.up.railway.app/api/functions/5');
        const result = await response.json();
        setData(result.funciones);
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

      {data && (
        <View>
          {data.map((funcion) => (
            <View>
              <View key={funcion.id} className="rounded-lg border-white place-items-start ml-2 border-2 w-720 h-12 mt-10">
                <Text className="text-white text-base">{funcion.nombre_pelicula} - {funcion.dia}</Text>
              </View>

              <View key={funcion.id} className="rounded-lg border-white place-items-start ml-2 border-2 w-720 h-12 mt-10">
                <Text className="text-white text-base">{funcion.nombre_pelicula}</Text>
                <Text>Día: {funcion.dia}</Text>
                <Text>Horario: {funcion.horario}</Text>
              </View>

            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default Functions;

