import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function ListCinemaRoom(props) {
  return (
    <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      {props.cinemaRooms.map((cinemaRoom) => (
        <TouchableOpacity key={cinemaRoom.id} onPress={() => props.handler(cinemaRoom.numero_sala)}>
          <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
            <Text className="text-white">{cinemaRoom.numero_sala}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

