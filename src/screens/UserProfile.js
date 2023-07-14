import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import HomeButton from "../components/HomeButton";
import { useNavigation, useRoute } from '@react-navigation/native';
import { UserContext } from '../context/UserContext'; 

export default function UserProfile() {
    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
  
  
    useEffect(() => {
      fetchUserData();
    }, []);
  
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://backendmobile-production.up.railway.app/api/usuarios/${userEmail}`);
        if (response.ok) {
          const userData = await response.json();
          setName(userData.nombre);
          setSurname(userData.apellido);
        } else {
          console.error('Error al obtener los datos del usuario:', response.status);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} className=' bg-gray-900' style={{ flex: 1 }}>
      <Image className='h-152 w-159 mt-2' source={require('../images/BasicProfile.png')} />
      <TextInput
        value={Name}
        onChangeText={(text) => setName(text)}
        className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-72 mt-5 h-12 mx-2.5 text-lg text-white text-center"
        placeholder="Nombre"
        placeholderTextColor="white"
      />
      <TextInput
        value={Surname}
        onChangeText={(text) => setSurname(text)}
        className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-72 mt-5 h-12 mx-2.5 text-lg text-white text-center"
        placeholder="Apellido"
        placeholderTextColor="white"
      />
      <HomeButton
        color='#FF3131'
        title='Logout'
        handler={() => navigation.navigate({ name: 'Home' })}
      />
    </ScrollView>
  );
}
