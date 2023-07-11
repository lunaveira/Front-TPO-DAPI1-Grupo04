import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { ScrollView } from "react-native";

export default function CreateFunction({ navigation,route }) {
  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");
  const [imagen, setImagen] = useState("");
  const { id_sala, id_sucursal, numero_sala } = route.params;
  console.log(id_sala);
  console.log (id_sucursal);
  console.log(numero_sala);


  //S

  const crearFuncion = async () => {
    try {
      const fechaParts = dia.split("/"); // Separar la cadena de fecha en partes
      const fecha = new Date(
        parseInt(fechaParts[2]), // Año
        parseInt(fechaParts[1]) - 1, // Mes (restar 1 porque los meses comienzan desde 0)
        parseInt(fechaParts[0]) // Día
      );

      const fechaFormateada = fecha.toISOString().slice(0, 10); // Formatear la fecha como 'YYYY-MM-DD'

      console.log("Datos a enviar:", {
        dia: fechaFormateada,
        horario: horario,
        pelicula: {
          titulo: titulo,
          descripcion: descripcion,
          genero: genero,
          imagen: imagen,
        },idSala:id_sala
        
      });

      const response = await fetch(`https://backendmobile-production.up.railway.app/api/funciones/${id_sala}/create`, {
        
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titulo: titulo,
            descripcion: descripcion,
            genero: genero,
            imagen: imagen,
            dia: fechaFormateada,
            horario: horario
          }),
        }
      );
      console.log(id_sala)

      
      if (response.status === 201) {
        console.log
        const nuevaFuncion = await response.json();
        console.log("Respuesta del servidor:", nuevaFuncion);

        navigation.replace("Functions",{id_sucursal:id_sucursal, numero_sala:numero_sala});
      } else {
        console.error("Error al crear la función");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const cargarImagen = () => {
    launchImageLibrary(
      { mediaType: "photo", maxWidth: 10, maxHeight: 10, includeBase64: true },
      (res) => {
        if (res.assets && res.assets.length > 0) {
          setImagen(res.assets[0].base64);
        }
      }
    );
  };

  return (
    <ScrollView
      style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center", padding: 20 }}
    >
      <TextInput
        style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Título"
        placeholderTextColor="#888"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Descripción"
        placeholderTextColor="#888"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <TextInput
        style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Género"
        placeholderTextColor="#888"
        value={genero}
        onChangeText={setGenero}
      />

      <Button title="Cargar Imagen" onPress={cargarImagen} />

      <TextInput
        style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Día (Día/Mes/Año)"
        placeholderTextColor="#888"
        value={dia}
        onChangeText={setDia}
      />

      <TextInput
        style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Horario"
        placeholderTextColor="#888"
        value={horario}
        onChangeText={setHorario}
      />


      <Button title="Crear Función" onPress={crearFuncion} />
    </ScrollView>
  );
}

