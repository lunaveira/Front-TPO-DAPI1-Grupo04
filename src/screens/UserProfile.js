import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import HomeButton from "../components/HomeButton";


export default function UserProfile({ navigation }) {
    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} className=' bg-gray-900' style={{ flex: 1 }}>



            <Image className='h-152 w-159 mt-2' source={require('../images/BasicProfile.png')} />

            <TextInput value={Name} onChangeText={(text) => setName(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-72 mt-5 h-12 mx-2.5 text-lg text-white text-center "
                placeholder="Nombre" placeholderTextColor="white" />
            <TextInput value={Surname} onChangeText={(text) => setSurname(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-72 mt-5 h-12 mx-2.5 text-lg text-white text-center "
                placeholder="Apellido" placeholderTextColor="white" />

            <HomeButton color='#FF3131' title='Logout' handler={() => navigation.navigate({ name: 'Home' })} />

        </ScrollView>

    )

}
