import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atob } from 'react-native-quick-base64';

export default function ProfileLogo({ navigation }) {
    const [nombreEmpresa, setNombreEmpresa] = useState("");
    const [emailUsuario, setEmailUsuario] = useState("");

    useEffect(() => {
        obtenerDatosSocio();
    }, []);

    async function obtenerDatosSocio() {
        try {
            const token_encriptado = await AsyncStorage.getItem('@token')
            const idSocio = JSON.parse(atob(token_encriptado.split('.')[1]))
            const token = await AsyncStorage.getItem("@token");
            const responseSocio = await fetch(`https://backendmobile-production.up.railway.app/api/socios/${idSocio.user.id}`, { 
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (responseSocio.ok) {
                const dataSocio = await responseSocio.json();
                const socio = dataSocio.socio[0]; // Suponemos que el socio se encuentra en la primera posición del arreglo devuelto

                setNombreEmpresa(socio.nombre_empresa);
                setEmailUsuario(socio.email);
            } else {
                console.error("Error al obtener los datos del socio");
            }
        } catch (error) {
            console.error("Error al obtener los datos del socio:", error);
        }
    }

    async function handleLogout() {
        await AsyncStorage.removeItem("@token");
        navigation.navigate("Home");
    }




    return (


        <View className=" items-center bg-gray-900 h-screen">


            <View className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-80 mt-10 h-14 mx-2.5 text-base text-white text-center " >
                <Text className="text-white text-base text-center ">{nombreEmpresa && nombreEmpresa}</Text>
            </View>

            <View className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-80 mt-5 h-14 mx-2.5 text-base text-white text-center "  >
                <Text className="text-white text-base text-center">{emailUsuario}</Text>
            </View>



            <Button onPress={handleLogout} title='logout'></Button>
        </View>
    );
}


