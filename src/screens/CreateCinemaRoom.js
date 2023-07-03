import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function CreateNewCinemaRoom({ navigation, route }) {
  const [fila, setFila] = useState('');
  const [columna, setColumna] = useState('');
  const [numero_sala, setNumeroSala] = useState('');
  const id_sucursal = route.params.id_sucursal;

  const handleCreateCinemaRoom = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/cinema-room/${id_sucursal}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fila: parseInt(fila),
          columna: parseInt(columna),
          numero_sala: parseInt(numero_sala),
        }),
      });

      if (response.ok) {
        // La sala se creó exitosamente
        Alert.alert('Éxito', 'Sala de cine creada exitosamente');
        navigation.goBack(); // Regresar a la pantalla anterior
      } else {
        // Ocurrió un error al crear la sala
        const errorMessage = await response.text();
        Alert.alert('Error', 'Error al crear la sala de cine: ' + errorMessage);
      }
    } catch (error) {
      console.error('Error al conectarse con el servidor:', error);
    }
  };

  return (
    <View>
      <TextInput
        value={fila}
        onChangeText={setFila}
        placeholder="Cantidad de filas"
      />
      <TextInput
        value={columna}
        onChangeText={setColumna}
        placeholder="Cantidad de columnas"
      />
      <TextInput
        value={numero_sala}
        onChangeText={setNumeroSala}
        placeholder="Número de sala"
      />
   
      <Button onPress={handleCreateCinemaRoom} title="Crear sala" />
    </View>
  );
}
