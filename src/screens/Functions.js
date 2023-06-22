import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const Functions = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backendmobile-production.up.railway.app/api/functions/:idSala'); 
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handlePress = () => {
    // Navegar a la página de detalle de funciones
  };

  return (
    <View className=" items-center bg-gray-900 h-screen">
      <Text className="text-white mt-10 text-lg">Funciones</Text>
      <Button title="Crear función" onPress={() => navigation.navigate({ name: 'Create Function' })} />

      {data && (
        <View>
          {data.sala.map((sala) => (
            <Text key={sala.id}>Sala: {sala.nombre}</Text>
          ))}
          {data.funciones.map((funcion) => (
            <Text key={funcion.id}>Función: {funcion.nombre}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Functions;
