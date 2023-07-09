import { Text, ScrollView, TextInput, View, Button } from "react-native"
import { useState } from 'react';
import MoviesGrid from "../components/MoviesGrid";
import { useNavigation } from '@react-navigation/native';

export default function MainPageUser() {
    const navigation = useNavigation();
    const [Busqueda, setBusqueda] = useState('')

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: 'rgb(17 24 39)', flex: 1 }}>

            <View>
                <Text className='text-white mt-5' >¿Que te gustaría ver?</Text>
                <TextInput
                    className=" h-11 w-72 border-white border-2 rounded-lg mb-5 text-base text-center text-white justify-center mt-1"
                    value={Busqueda}
                    onChangeText={setBusqueda}
                    placeholder="Buscar..."
                    placeholderTextColor="white"
                />
            </View>

            <Button color='#FF3131' title="PELICULA"  onPress={() => navigation.navigate({ name: 'Movie Details' })}/>
            
            <Image className='h-194 w-148 mt-2'source={require('../images/theDarkKnight.jpeg')} onPress={() => navigation.navigate({ name: 'Movie Details' })} />

            <MoviesGrid />
           
         
        


        </ScrollView>

    )

}
