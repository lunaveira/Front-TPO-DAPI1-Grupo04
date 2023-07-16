import React, { useState } from 'react';
import { View, TextInput, Button, Alert, ScrollView } from 'react-native';
import HomeButton from '../components/HomeButton';

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
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}>
      <TextInput
        value={fila}
        onChangeText={setFila}
        className='mt-28 text-center'
        style={{width: "80%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Cantidad de filas" placeholderTextColor="white"
      />
      <TextInput
        value={columna}
        onChangeText={setColumna}
        className='mt-5 text-center'
        style={{ width: "80%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Cantidad de columnas" placeholderTextColor="white"
      />
      <TextInput
        value={numero_sala}
        onChangeText={setNumeroSala}
        className='mt-5 text-center'
        style={{ width: "80%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Número de sala" placeholderTextColor="white"
      />
      <HomeButton handler={handleCreateCinemaRoom} title="Crear sala" color='red' />
    </ScrollView>
  );
}
