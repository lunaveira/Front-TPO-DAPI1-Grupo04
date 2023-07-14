import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { launchImageLibrary } from "react-native-image-picker";

import HomeButton from "../components/HomeButton";

export default function EditFunction({ navigation, route }) {
    const { functionId, functionData } = route.params;

    const [dia, setDia] = useState(functionData?.dia || "");
    const [horario, setHorario] = useState(functionData?.horario || "");
    const [titulo, setTitulo] = useState(functionData?.titulo || "");
    const [descripcion, setDescripcion] = useState(functionData?.descripcion || "");
    const [genero, setGenero] = useState(functionData?.genero || "");
    const [imagen, setImagen] = useState(functionData?.imagen || "");

    const handleUpdateFunction = async () => {
        try {
            console.log("Valores a actualizar:", dia, horario, titulo, descripcion, genero, imagen);

            const response = await fetch(
                `https://backendmobile-production.up.railway.app/api/funciones/${functionId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        dia,
                        horario,
                        titulo,
                        descripcion,
                        genero,
                    }),
                }
            );

            if (response.status === 200) {
                // La función se actualizó exitosamente
                console.log("Función actualizada");
                navigation.goBack(); // Regresar a la pantalla anterior
            } else if (response.status === 400) {
                const errorMessage = await response.text();
                console.error("Error al actualizar la función:", errorMessage);
            } else if (response.status === 404) {
                console.error("Función no encontrada");
            } else {
                console.error("Error al actualizar la función");
            }
        } catch (error) {
            console.error("Error al conectarse con el servidor:", error);
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

    console.log("Valores iniciales:", dia, horario, titulo, descripcion, genero, imagen);

    return (
        <ScrollView
            contentContainerStyle={{ alignItems: "center" }}
            style={{ backgroundColor: "rgb(17 24 39)", flex: 1 }}
        >
            <TextInput
                value={dia}
                onChangeText={setDia}
                style={{
                    color: "white",
                    fontSize: 16,
                    backgroundColor: "#FF3131",
                    width: 250,
                    height: 50,
                    marginTop: 28,
                    borderRadius: 10,
                    textAlign: "center",
                }}
                placeholder="Día"
                placeholderTextColor="white"
            />

            <TextInput
                value={horario}
                onChangeText={setHorario}
                style={{
                    color: "white",
                    fontSize: 16,
                    backgroundColor: "#FF3131",
                    width: 250,
                    height: 50,
                    marginTop: 10,
                    borderRadius: 10,
                    textAlign: "center",
                }}
                placeholder="Horario"
                placeholderTextColor="white"
            />

            <TextInput
                value={titulo}
                onChangeText={setTitulo}
                style={{
                    color: "white",
                    fontSize: 16,
                    backgroundColor: "#FF3131",
                    width: 250,
                    height: 50,
                    marginTop: 10,
                    borderRadius: 10,
                    textAlign: "center",
                }}
                placeholder="Título de la película"
                placeholderTextColor="white"
            />

            <TextInput
                value={descripcion}
                onChangeText={setDescripcion}
                style={{
                    color: "white",
                    fontSize: 16,
                    backgroundColor: "#FF3131",
                    width: 250,
                    height: 50,
                    marginTop: 10,
                    borderRadius: 10,
                    textAlign: "center",
                }}
                placeholder="Descripción"
                placeholderTextColor="white"
            />

            <TextInput
                value={genero}
                onChangeText={setGenero}
                style={{
                    color: "white",
                    fontSize: 16,
                    backgroundColor: "#FF3131",
                    width: 250,
                    height: 50,
                    marginTop: 10,
                    borderRadius: 10,
                    textAlign: "center",
                }}
                placeholder="Género"
                placeholderTextColor="white"
            />

            {imagen && <Image source={{ uri: `data:image/jpeg;base64,${imagen}` }} style={{ width: 100, height: 100 }} />}

            <Button title="Cargar Imagen" onPress={cargarImagen} />

            <Button onPress={handleUpdateFunction} title="Guardar" />
        </ScrollView>
    );
}
