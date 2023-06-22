import { View, Text, Button } from 'react-native'
import HomeButton from '../components/HomeButton';
import FlatlistMovies from '../components/FlatlistMovies';

export default function MainPageOwner({ navigation }) {

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