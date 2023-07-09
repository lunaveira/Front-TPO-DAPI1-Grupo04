import { Text, ScrollView, TextInput, View, } from "react-native"
import { useState } from 'react';
import MoviesGrid from "../components/MoviesGrid";
import { Picker } from '@react-native-picker/picker';


export default function FiltersMovies() {

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: '#111827', flex: 1 }}>

            <View className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-80 mt-20 h-13 mx-2.5  ">
                <Text className='text-base text-white text-center'> Filtro 1</Text>
            </View>

            <View className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-80 mt-20 h-13 mx-2.5  ">
                <Text className='text-base text-white text-center'> Filtro 2</Text>
            </View>


            <Picker style={{ height: 42, width: '50%', backgroundColor: 'white' }}>
                <Picker.Item className="h-24 w-24 bg-white text-white" label="Si" value={true} />
                <Picker.Item className="h-24 w-24 bg-white text-white" label="No" value={false} />
            </Picker>



        </ScrollView>

    )

}