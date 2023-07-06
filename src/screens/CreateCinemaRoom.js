import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function CreateNewCinemaRoom({ navigation, route }) {
  const [fila, setFila] = useState("");
  const [columna, setColumna] = useState("");
  const [numero_sala, setNumeroSala] = useState("");
  const { id_sucursal } = route.params;
  const sucursal=parseInt(id_sucursal);

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
          numero_sala: parseInt(numero_sala)
        }),
      });
    

      if (response.ok) {
        // La sala se creó exitosamente
        Alert.alert('Éxito', 'Sala de cine creada exitosamente');
        navigation.replace("Cinema Rooms",{ id_sucursal: id_sucursal }); // Regresar a la pantalla anterior
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
        className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 h-13 mx-2.5 text-base text-white text-center"
        placeholder="Cantidad de filas" placeholderTextColor="white"
      />
      <TextInput
        value={columna}
        onChangeText={setColumna}
        className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 h-13 mx-2.5 text-base text-white text-center"
        placeholder="Cantidad de columnas" placeholderTextColor="white"
      />
      <TextInput
        value={numero_sala}
        onChangeText={setNumeroSala}
        className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 h-13 mx-2.5 text-base text-white text-center"
        placeholder="Número de sala" placeholderTextColor="white"
      />
      <Button onPress={handleCreateCinemaRoom} title="Crear sala" />
    </View>
  );
}
