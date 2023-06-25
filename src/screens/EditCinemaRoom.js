import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import HomeButton from "../components/HomeButton";
import { ScrollView } from "react-native";

export default function EditCinemaRoom() {
  const [fila, setFila] = useState(0);
  const [columna, setColumna] = useState(0);
  const [numero_sala, setNumeroSala] = useState(0);

  const handleUpdateCinemaRoom = async () => {
    try {
      const response = await fetch("https://backendmobile-production.up.railway.app/:idsucursal/cinema-room/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fila: fila,
          columna: columna,
          numero_sala: numero_sala,
        }),
      });

      if (response.status === 200) {
        // La sala se actualizó exitosamente
        console.log("Sala actualizada");
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
        className=" text-lg text-center text-white bg-red-400 w-80 h-20 mt-28 rounded-lg "
        placeholder="Cantidad de filas"
        placeholderTextColor={"white"}
      ></TextInput>

      <TextInput
        value={columna}
        onChangeText={ setColumna}
        className="text-lg text-center text-white bg-red-400 w-80 h-20 rounded-lg mt-5 "
        placeholder="Cantidad de columnas"
        placeholderTextColor={"white"}
      ></TextInput>

      <TextInput
        value={numero_sala}
        onChangeText= {setNumeroSala}
        className="text-lg text-center text-white bg-red-400 w-80 h-20 rounded-lg mt-5 "
        placeholder="Número de sala"
        placeholderTextColor={"white"}
      ></TextInput>

      <Button onPress={handleUpdateCinemaRoom} title="Guardar"></Button>
    </ScrollView>
  );
}
