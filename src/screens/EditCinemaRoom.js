import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeButton from "../components/HomeButton";

export default function EditCinemaRoom({ navigation, route }) {
  const [fila, setFila] = useState('');
  const [columna, setColumna] = useState('');
  const [numero_sala_nuevo, setNumeroSala] = useState('');

  const { id_sucursal, numero_sala } = route.params;

  const handleUpdateCinemaRoom = async () => {
    try {
      const response = await fetch(
        `https://backendmobile-production.up.railway.app/${id_sucursal}/${numero_sala}/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fila: parseInt(fila),
            columna: parseInt(columna),
            numero_sala_nuevo: parseInt(numero_sala_nuevo),
          }),
        }
      );

      if (response.status === 200) {
        // La sala se actualizó exitosamente
        console.log("Sala actualizada");
        navigation.goBack(); // Regresar a la pantalla anterior
      } else if (response.status === 400) {
        const errorMessage = await response.text();
        console.error("Error al actualizar la sala:", errorMessage);
      } else if (response.status === 404) {
        console.error("Sala no encontrada");
      } else {
        console.error("Error al actualizar la sala");
      }
    } catch (error) {
      console.error("Error al conectarse con el servidor:", error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center" }}
      style={{ backgroundColor: "rgb(17 24 39)", flex: 1 }}
    >
      <TextInput
        value={fila.toString()}
        onChangeText={text => setFila(parseInt(text))}
        style={{
          color: "white",
          fontSize: 16,
          backgroundColor: "#333",
          width: 250,
          height: 50,
          marginTop: 60,
          borderRadius: 10,
          textAlign: "center",
        }}
        placeholder="Cantidad de filas"
        placeholderTextColor="white"
        keyboardType="numeric"
      />

      <TextInput
        value={columna.toString()}
        onChangeText={text => setColumna(parseInt(text))}
        style={{
          color: "white",
          fontSize: 16,
          backgroundColor: "#333",
          width: 250,
          height: 50,
          marginTop: 15,
          borderRadius: 10,
          textAlign: "center",
        }}
        placeholder="Cantidad de columnas"
        placeholderTextColor="white"
        keyboardType="numeric"
      />

      <TextInput
        value={numero_sala_nuevo.toString()}
        onChangeText={text => setNumeroSala(parseInt(text))}
        style={{
          color: "white",
          fontSize: 16,
          backgroundColor: "#333",
          width: 250,
          height: 50,
          marginTop: 15,
          borderRadius: 10,
          textAlign: "center",
        }}
        placeholder="Número de sala"
        placeholderTextColor="white"
        keyboardType="numeric"
      />

      <View className='mt-16'>

      <HomeButton color='red' handler={handleUpdateCinemaRoom} title="Guardar" />

      </View>

    </ScrollView>
  );
}
