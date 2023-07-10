import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { ScrollView } from "react-native";
import HomeButton from "../components/HomeButton";

export default function CreateFunction({ navigation }) {
  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");
  const [imagen, setImagen] = useState("");
  const [idSala, setIdSala] = useState("");

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
        },
        id_sala: idSala,
      });

      const response = await fetch(
        "https://backendmobile-production.up.railway.app/api/funciones",
        {
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
            horario: horario,
            id_sala: idSala,
          }),
        }
      );

      if (response.status === 201) {
        const nuevaFuncion = await response.json();
        console.log("Respuesta del servidor:", nuevaFuncion);

        navigation.replace("Functions", idSala);
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
      style={{ backgroundColor: "rgb(17 24 39)", flex: 1 }}
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

      <HomeButton color='#565656' title="Cargar Imagen" handler={cargarImagen} />

      <TextInput
        style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff", marginTop: 10 }}
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

      <TextInput
        style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="ID de Sala"
        placeholderTextColor="#888"
        value={idSala}
        onChangeText={setIdSala}
      />

      <HomeButton color='#FF3131' title="Crear Función" handler={crearFuncion} />
    </ScrollView>
  );
}

