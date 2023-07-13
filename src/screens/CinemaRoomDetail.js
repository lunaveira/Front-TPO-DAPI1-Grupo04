import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import HomeButton from "../components/HomeButton";

export default function CinemaRoomDetail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { id_sucursal, numero_sala } = route.params;

  const [totalAsientos, setTotalAsientos] = useState(0);

  const fetchCinemaRoomDetails = async () => {
    try {
      const response = await fetch(
        `https://backendmobile-production.up.railway.app/${id_sucursal}/cinema-room/${numero_sala}/getbyid`
      );

      if (response.ok) {
        const sala = await response.json();
        const cantidad_filas = sala.fila;
        const cantidad_columnas = sala.columna;
        if (cantidad_filas && cantidad_columnas) {
          const total = cantidad_filas * cantidad_columnas;
          setTotalAsientos(total);
        } else {
          console.log("Datos de cantidad de filas o columnas faltantes");
        }
      } else {
        console.log("Error al obtener el detalle de la sala de cine");
      }
    } catch (error) {
      console.error("Error al conectarse con el servidor:", error);
    }
  };

  useEffect(() => {
    fetchCinemaRoomDetails();
  }, [id_sucursal, numero_sala]); // Volver a llamar fetchCinemaRoomDetails cuando id_sucursal o numero_sala cambien

  const handlerEdit = () => {
    navigation.navigate("Edit Cinema Room", {
      numero_sala: numero_sala,
      id_sucursal: id_sucursal,
    });
  };

  const handlerFunciones = () => {
    navigation.navigate("Functions", {
      numero_sala: numero_sala,
      id_sucursal: id_sucursal,
    });
  };

  const handleDeleteCinemaRoom = async () => {
    try {
      const response = await fetch(
        `https://backendmobile-production.up.railway.app/${id_sucursal}/${numero_sala}/deletecinemarooms`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Sala eliminada");
        navigation.replace("Cinema Rooms", { id_sucursal: id_sucursal });
      } else if (response.status === 400) {
        const errorMessage = await response.text();
        console.error("Error al eliminar la sala:", errorMessage);
      } else if (response.status === 404) {
        console.error("Sala no encontrada");
      } else {
        console.error("Error al eliminar la sala");
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
      <View className="items-center bg-red-400 w-80 h-20 rounded-lg mt-5">
        <Text className="text-white text-center text-xl mt-4">
          Total de asientos: {totalAsientos}
        </Text>
      </View>

      <View className="mb-5 mt-5">
        <Text className="text-white text-center text-xl mt-4">
          Número de sala: {numero_sala}
        </Text>
      </View>

      <View className="mb-5 mt-5">
        <HomeButton color="#FF3131" title="Editar sala" handler={handlerEdit} />
      </View>

      <View className="mb-5 mt-5">
        <HomeButton
          color="#FF3131"
          title="Eliminar sala"
          handler={handleDeleteCinemaRoom}
        />
      </View>

      <View className="mb-5 mt-5">
        <HomeButton
          color="#FF3131"
          title="Ver funciones"
          handler={handlerFunciones}
        />
      </View>
    </ScrollView>
  );
}
