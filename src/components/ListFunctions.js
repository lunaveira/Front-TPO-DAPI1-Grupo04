import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function ListFunctions(props) {
  return (
    <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      {props.funcion.map((funciones) => (
        <TouchableOpacity key={funciones.id} onPress={() => props.handler(funciones.id)}>
          <View style={{ width: 250, backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
            <Text className="text-white text-lg text-center">{funciones.id_pelicula}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
