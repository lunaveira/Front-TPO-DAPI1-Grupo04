// Pantalla FunctionDetail

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import HomeButton from '../components/HomeButton';
import { useNavigation, useRoute } from '@react-navigation/native';

const FunctionDetail = () => {
  const navigation = useNavigation();
  const { functionId, id_sucursal } = useRoute().params;
  const [functionData, setFunctionData] = useState(null);
  console.log("id funcion:",functionId);

  useEffect(() => {
    const fetchFunctionData = async () => {
      try {
        const response = await fetch(`https://backendmobile-production.up.railway.app/api/functions/${functionId}/getbyid`);
        if (response.ok) {
          const data = await response.json();
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
    navigation.navigate('Edit Function', { functionId: functionId, functionData: functionData });
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
      <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
        <Text className="text-white">Titulo: {functionData?.titulo}</Text>
      </View>

      <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
        <Text className="text-white">Sinopsis: {functionData?.descripcion}</Text>
      </View>

      <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
        <Text className="text-white">Género: {functionData?.genero}</Text>
      </View>

      <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
        <Text className="text-white">Día: {functionData?.dia}</Text>
      </View>

      <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
        <Text className="text-white">Horario: {functionData?.horario}</Text>
      </View>

      <HomeButton color="#FF3131" title="Editar" handler={handleEdit} />
      <HomeButton color="#FF3131" title="Eliminar" handler={handleDelete} />
    </ScrollView>
  );
};

export default FunctionDetail;


