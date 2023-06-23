import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

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
    <View style={{ alignItems: 'center', backgroundColor: 'gray', height: '100%' }}>
      <Text style={{ color: 'white', marginTop: 10, fontSize: 20 }}>Funciones</Text>
      <Button title="Crear función" onPress={() => navigation.navigate({ name: 'Create Function' })} />

      {data && (
        <View>
          {data.map((funcion) => (
            <View key={funcion.id}>
              <Text>Numero de Sala: {funcion.numero_sala}</Text>
              <Text>Nombre de la Película: {funcion.nombre_pelicula}</Text>
              <Text>Día: {funcion.dia}</Text>
              <Text>Horario: {funcion.horario}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Functions;

