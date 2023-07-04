import { Text, ScrollView, TextInput, View } from "react-native"
import { useState } from 'react';


export default function MainPageUser (){
    const [Busqueda, setBusqueda] = useState('')

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}>

            <View>
                <Text className='text-white' >¿Que te gustaría ver?</Text>
                <TextInput
                    className=" h-11 w-72 border-white border-2 rounded-lg mb-5 text-base text-center text-white justify-center mt-1"
                    value={Busqueda}
                    onChangeText={setBusqueda}
                    placeholder="Buscar..."
                    placeholderTextColor="white"
                />
            </View>

        
        </ScrollView>

    )

}
