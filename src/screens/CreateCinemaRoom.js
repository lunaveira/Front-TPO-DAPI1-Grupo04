import {View, Text, TextInput, Button, Image} from 'react-native'
import HomeButton from '../components/HomeButton';
import React, { useEffect, useState } from "react";
import { launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native';


export default function CreateNewCinemaRooom({navigation}) {

    const [fila, setFila] = useState(0);
    const [columna, setColumna] = useState(0);
    const [numero_sala, setNurmeroSala] = useState(0);
    

    /*value={isTemporarilyClosed}
        onChangeText={setIsTemporarilyClosed}*/
 

    const handleCreateCinemaRoom = async () => {
      try {
        const response = await fetch("https://backendmobile-production.up.railway.app/cinema-room/${id_sucursal}", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fila: fila,
            columna: columna,
            numero_sala:numero_sala
          }),
        });
  
        if (response.status === 200) {
          // La sucursal se creó exitosamente
          navigation.navigate("CinemaRooms");
        } else if (response.status === 400) {
          const errorMessage = await response.text();
          console.error("Error al crear la sala:", errorMessage);
        } else {
          console.error("Error al crear la sala");
        }
      } catch (error) {
        console.error("Error al conectarse con el servidor:", error);
      }
    };
  

    return (
      <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{alignItems:'center',justifyContent:'center'}}>
          

        <TextInput value={fila}
        onChangeText={setFila} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 h-13 
        mx-2.5 text-base text-white text-center " 
        placeholder="cantidad de filas" placeholderTextColor="white" />

        <TextInput value={columna}
        onChangeText={setColumna} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Cantidad de columnas" placeholderTextColor="white" />

        <TextInput value={numero_sala}
        onChangeText={setNurmeroSala} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="numero de sala" placeholderTextColor="white" />

        <Button onPress={ handleCreateCinemaRoom} title='Crear sala'></Button>
           
        </ScrollView>
    );

}