import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Alert, Button } from 'react-native';
import ListDetailBranches from '../components/ListDetailBranches';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atob } from 'react-native-quick-base64';
import HomeButton from '../components/HomeButton';
import { useNavigation } from '@react-navigation/native';

export default function BranchesDetail({ route }) {
  const [branches, setBranches] = useState([]);
  const [token, setToken] = useState('');
  const navigation = useNavigation();

  const { id_sucursal } = route.params;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token_encriptado = await AsyncStorage.getItem('@token');
      const idSocio = JSON.parse(atob(token_encriptado.split('.')[1]));
      setToken(token_encriptado);

      const response = await fetch(`https://backendmobile-production.up.railway.app/api/branches/${route.params.sucursalId}/${idSocio.user.id}`, {
        headers: {
          Authorization: `Bearer ${token_encriptado}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setBranches([result]);
      } else {
        console.log('Error al obtener el detalle de la sucursal');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token_encriptado = await AsyncStorage.getItem('@token');
      const idSocio = JSON.parse(atob(token_encriptado.split('.')[1]));

      const response = await fetch('https://backendmobile-production.up.railway.app/api/cinema/branches', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token_encriptado}`,
        },
        body: JSON.stringify({ id_sucursal: route.params.sucursalId }),
      });

      if (response.ok) {
        // Sucursal eliminada exitosamente
        Alert.alert('Éxito', 'Sucursal correctamente eliminada', [
          {
            text: 'Aceptar',
            onPress: () => {
              // Actualizar la lista de sucursales
              fetchData();
              // Reemplazar la pantalla actual por la página principal del propietario
              navigation.replace('Main Owner');
            },
          },
        ]);
      } else {
        console.log('Error al eliminar la sucursal');
      }
    } catch (error) {
      console.error('Error al eliminar la sucursal:', error);
    }
  };

  const handleEdit = () => {
    // Obtener los datos de la sucursal a editar
    const sucursal = branches[0];

    // Navegar a la pantalla de edición y pasar los datos de la sucursal como parámetros
    navigation.navigate('Edit Branches', { sucursal });
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}>

      <Button
        onPress={() => navigation.navigate('Cinema Rooms', { id_sucursal: route.params.sucursalId })}
        title="Ver salas"
      />

      <Text className="text-white text-center text-lg mt-5">Detalle de la sucursal </Text>
      <ListDetailBranches branches={branches} />
      <View className="flex-row mt-2">
        <View className="mx-2">
          <HomeButton color="red" title="Editar" handler={handleEdit} />
        </View>
        <View className="mx-2">
          <HomeButton color="red" title="Eliminar" handler={handleDelete} />
        </View>
      </View>
    </ScrollView>
  );
}
