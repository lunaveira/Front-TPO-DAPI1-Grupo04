import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function ListCinemaRoom(props) {
  return (
    <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      {props.cinemaRooms.map((cinemaRoom) => (
        <TouchableOpacity key={cinemaRoom.id} onPress={() => props.handler(cinemaRoom.numero_sala)}>
          <View style={{ width: 250, backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}>
            <Text className="text-white text-lg text-center">{cinemaRoom.numero_sala}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

