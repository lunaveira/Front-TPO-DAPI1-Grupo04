// Pantalla FunctionDetail

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HomeButton from '../components/HomeButton';
import { useNavigation, useRoute } from '@react-navigation/native';

const FunctionDetail = () => {
  const navigation = useNavigation();
  const { functionId } = useRoute().params;
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
    navigation.navigate('Edit Function');
  };

  return (
    <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
        <Text className="text-white">Titulo: {functionData?.titulo}</Text>
      </View>

      <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
        <Text className="text-white">Sinopsis: {functionData?.descripcion}</Text>
      </View>

      <HomeButton color="#FF3131" title="Editar" handler={handleEdit} />
      <HomeButton color="#FF3131" title="Eliminar" />
    </ScrollView>
  );
};

export default FunctionDetail;


