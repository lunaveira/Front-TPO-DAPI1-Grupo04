import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import HomeButton from "../components/HomeButton";
import { ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function EditCinemaRoom({ navigation, route }) {
  const [fila, setFila] = useState(0);
  const [columna, setColumna] = useState(0);
  const [numero_sala_nuevo, setNumeroSala] = useState(0);
  

  const { id_sucursal, numero_sala } = route.params;

  
    console.log('id_sucursal:', id_sucursal);
    console.log('numero_sala:', numero_sala);
  

  const handleUpdateCinemaRoom = async () => {
    try {
       const response = await fetch(`https://backendmobile-production.up.railway.app/${id_sucursal}/${numero_sala}/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fila: parseInt (fila),
          columna: parseInt (columna),
          numero_sala: parseInt (numero_sala_nuevo),
        }),
      });

      if (response.status === 200) {
        // La sala se actualizó exitosamente
        console.log("Sala actualizada");
        navigation.replace("Cinema Rooms",{ id_sucursal: id_sucursal }); // Regresar a la pantalla anterior
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
    <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{alignItems:'center',justifyContent:'center'}}>
      <TextInput
        value={fila}
        onChangeText={setFila}
        className=" text-lg text-center text-white bg-red-400 w-80 h-30 mt-28 rounded-lg "
        placeholder="Cantidad de filas"
        placeholderTextColor={"white"}
      ></TextInput>

      <TextInput
        value={columna}
        onChangeText={ setColumna}
        className="text-lg text-center text-white bg-red-400 w-80 h-30 rounded-lg mt-10 "
        placeholder="Cantidad de columnas"
        placeholderTextColor={"white"}
      ></TextInput>

      <TextInput
        value={numero_sala_nuevo}
        onChangeText= {setNumeroSala}
        className="text-lg text-center text-white bg-red-400 w-80 h-30 rounded-lg mt-10 "
        placeholder="Número de sala"
        placeholderTextColor={"white"}
      ></TextInput>

      <Button onPress={handleUpdateCinemaRoom} title="Guardar"></Button>
    </ScrollView>
  );
}
