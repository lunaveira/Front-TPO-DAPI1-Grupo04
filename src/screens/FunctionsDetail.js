// Pantalla FunctionDetail

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert, Image } from 'react-native';
import HomeButton from '../components/HomeButton';
import { useNavigation, useRoute } from '@react-navigation/native';

const FunctionDetail = () => {
  const navigation = useNavigation();
  const { functionId, id_sucursal, id_sala } = useRoute().params;
  const [functionData, setFunctionData] = useState(null);
  console.log("id funcion:", functionId);
  console.log("id:sala", id_sala);

  useEffect(() => {
    const fetchFunctionData = async () => {
      try {
        const response = await fetch(`https://backendmobile-production.up.railway.app/api/functions/${functionId}/getbyid`);
        if (response.ok) {
          const data = await response.json();
          console.log("datos funcion?", data);
          setFunctionData(data);
        } else {
          console.error('Error al obtener los datos de la función:', response.status);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchFunctionData();
  }, [functionId]);

  const handleEdit = () => {
    navigation.navigate('Edit Function', { functionId: functionId, functionData: functionData, id_sala: id_sala, id_pelicula: functionData.id_pelicula, id_sucursal: id_sucursal });
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/api/funciones/${functionId}/deletebyid`, {
        method: 'DELETE',
      });

      if (response.status === 204) {
        // Función eliminada exitosamente
        Alert.alert('Eliminación exitosa', 'La función se ha eliminado correctamente');
        navigation.goBack();
      } else if (response.status === 404) {
        console.error('No se encontró la función');
      } else {
        console.error('Error al eliminar la función:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>

      <View className='mt-7'>

      {functionData?.imagen && <Image source={{ uri: `data:image/jpeg;base64,${functionData?.imagen}` }} style={{ width: 100, height: 100, resizeMode:'stretch' }} />}

      </View>

      <View className='mt-5' style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
        <Text className="text-white text-center">Titulo: {functionData?.titulo}</Text>
      </View>

      <View style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
        <Text className="text-white text-center">Sinopsis: {functionData?.descripcion}</Text>
      </View>

      <View style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
        <Text className="text-white text-center">Género: {functionData?.genero}</Text>
      </View>

      <View style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
        <Text className="text-white text-center">Día: {functionData?.dia}</Text>
      </View>

      <View style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
        <Text className="text-white text-center">Horario: {functionData?.horario}</Text>
      </View>

      <View className='flex-row mt-5'>

        <View className='mr-2'>

          <HomeButton color="#FF3131" title="Editar" handler={handleEdit} />
        </View>
        <HomeButton color="#FF3131" title="Eliminar" handler={handleDelete} />

      </View>
    </ScrollView>
  );
};

export default FunctionDetail;


