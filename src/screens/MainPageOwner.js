import { View, Text, Button } from 'react-native'
import HomeButton from '../components/HomeButton';
import { useEffect } from 'react';
import FlatlistMovies from '../components/FlatlistMovies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atob } from 'react-native-quick-base64';

export default function MainPageOwner({ navigation }) {

    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = await AsyncStorage.getItem('@token')
            const idSocio = JSON.parse(atob(token.split('.')[1]))
            console.log(idSocio)
            return 
            const response = await fetch(`https://backendmobile-production.up.railway.app/api/cinema/${idSocio}/branches`);
            const result = await response.json();
            setData(result.funciones);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

    function getBranches() {
       
    }

    return (
        <View className=" items-center bg-gray-900 h-screen">

            <Button title='salas' onPress={() => navigation.navigate({ name: 'Cinema Rooms' })}> </Button>

    


            <Text className="text-white mt-20 text-base"> ¿Querés crear una nueva sucursal?</Text>
            <HomeButton color="red" title="Crear nueva sucursal" handler={() => navigation.navigate({ name: 'Create Branch' })} />

            <Text className="text-white mt-7 text-base"> Tus sucursales </Text>

            <FlatlistMovies />

            


        </View>
    );

}