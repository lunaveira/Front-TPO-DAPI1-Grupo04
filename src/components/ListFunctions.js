import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function ListFunctions(props) {
    const { funciones, idSala } = props;

    const navigation = useNavigation();

  
    return (
      <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
        {funciones.map((funcion) => (
          <TouchableOpacity key={funcion.id} onPress={() => navigation.navigate('Functions Detail', { functionId: funcion.id })}>

            <View style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
              <Text className="text-white text-lg text-center">{funcion.nombre_pelicula} - {funcion.dia} - {funcion.horario}</Text>
             
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
  

