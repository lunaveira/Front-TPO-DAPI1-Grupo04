import React from "react";
import { View, Text, Button, ScrollView,useEffect } from "react-native";
import HomeButton from "../components/HomeButton";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function CinemaRoomDetail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { id_sucursal, numero_sala } = route.params;

  
    console.log('id_sucursal:', id_sucursal);
    console.log('numero_sala:', numero_sala);
  
  const handlerEdit = () => {
    navigation.navigate("Edit Cinema Room");
  };

  const handlerFunciones = () => {
    navigation.navigate("Functions");
  };

  const handleDeleteCinemaRoom = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/${id_sucursal}/${numero_sala}/deletecinemarooms`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log('id_sucursal:', id_sucursal);
      console.log('numero_sala:', numero_sala);

      if (response.status === 200) {
        // La sala se eliminó exitosamente
        console.log("Sala eliminada");
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
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}>
      <View className="items-center bg-red-400 w-80 h-20 mt-28 rounded-lg ">
        <Text className="text-white text-center text-xl mt-4"> Cantidad de filas: </Text>
      </View>

      <View className="items-center bg-red-400 w-80 h-20 rounded-lg mt-5 ">
        <Text className="text-white text-center text-xl mt-4"> Cantidad de columnas: </Text>
      </View>

      <View className="mb-5 mt-5">
        <HomeButton color="#FF3131" title="Editar sala" handler={handlerEdit} />
      </View>

      <View className="mb-5 mt-5">
        <HomeButton color="#FF3131" title="Eliminar sala" handler={handleDeleteCinemaRoom} />
      </View>

      <View className="mb-5 mt-5">
        <HomeButton color="#FF3131" title="Ver funciones" handler={handlerFunciones} />
      </View>
    </ScrollView>
  );
}
