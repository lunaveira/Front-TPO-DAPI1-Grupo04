import { View, Text, TextInput, Button, Image } from 'react-native'
import HomeButton from '../components/HomeButton';
import React, { useEffect, useState } from "react";
import { launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native';


export default function CreateFunction({ navigation }) {

    const [dia, setDia] = useState('');
    const [horario, setHorario] = useState('');
    const [idPelicula, setIdPelicula] = useState('');
    const [idSala, setIdSala] = useState('');

    const crearFuncion = async () => {
        try {
            const response = await fetch('https://backendmobile-production.up.railway.app/api/funciones', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    dia: dia,
                    horario: horario,
                    id_pelicula: idPelicula,
                    id_sala: idSala,
                }),
            });

            if (response.status === 201) {
                const nuevaFuncion = await response.json();
                console.log(nuevaFuncion); // Imprime la respuesta del servidor


                navigation.navigate('Functions');
            } else {
                console.error('Error al crear la función');
            }
        } catch (error) {
            console.error(error);

        }
    };


    return (
        <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>

            <TextInput value={dia}
                onChangeText={(text) => setDia(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 h-13 
        mx-2.5 text-base text-white text-center "
                placeholder="Día" placeholderTextColor="white" />

            <TextInput value={horario}
                onChangeText={(text) => setHorario(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 
        h-13 mx-2.5 text-base text-white text-center"
                placeholder="Horario" placeholderTextColor="white" />

            <TextInput value={idPelicula}
                onChangeText={(text) => setIdPelicula(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5
        h-13 mx-2.5 text-base text-white text-center"
                placeholder="Pelicula" placeholderTextColor="white" />

            <TextInput value={idSala}
                onChangeText={(text) => setIdSala(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5
        h-13 mx-2.5 text-base text-white text-center"
                placeholder="Sala" placeholderTextColor="white" />

            <Button title="Crear Funcion" onPress={crearFuncion} />

        </ScrollView>
    );

}