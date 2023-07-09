import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import HomeButton from "../components/HomeButton";


export default function UserProfile({navigation}) {
    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: '#1E1E1E', flex: 1 }}>

            <View contentContainerStyle={{ alignItems: 'left' }} style={{ backgroundColor: '#1E1E1E', flex: 1, flexDirection:"row", 
            justifyContent:"space-between", flexWrap:"wrap-reverse", alignItems:"stretch" }}>
                <Text className="text-white text-base text-left ">Tu Perfil</Text>
            </View>

            <Image className='h-152 w-159 mt-2'source={require('../images/BasicProfile.png')}/>

            <TextInput value={Name} onChangeText={(text) => setName(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-96 mt-5 h-12 mx-2.5 text-lg text-white text-center " 
            placeholder="Nombre" placeholderTextColor="white" />
            <TextInput value={Surname} onChangeText={(text) => setSurname(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-96 mt-5 h-12 mx-2.5 text-lg text-white text-center " 
            placeholder="Apellido" placeholderTextColor="white" />

            <HomeButton color='#FF3131' title='Logout' handler={()=>navigation.navigate({name:'Home'})} />

        </ScrollView>

    )

}
