import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const ListFunctions = ({ funciones }) => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }} style={{ paddingHorizontal: 5, backgroundColor: '#000' }}>
      {funciones.map((funcion) => (
        <TouchableOpacity key={funcion.id} onPress={() => {/* Acciones al hacer clic en una función */}}>
          <View style={{ width: 250, backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10 }}>
            <Text style={{ color: "#fff", fontSize: 16, textAlign: 'center' }}>{funcion.id_pelicula}</Text>
            <Text style={{ color: "#fff", fontSize: 16, textAlign: 'center' }}>Día: {funcion.dia}</Text>
            <Text style={{ color: "#fff", fontSize: 16, textAlign: 'center' }}>Horario: {funcion.horario}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ListFunctions;
