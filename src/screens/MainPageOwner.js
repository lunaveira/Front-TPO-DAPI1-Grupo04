import {View, Text} from 'react-native'
import HomeButton from '../components/HomeButton';
import GridScreen from '../components/FlatlistMovies'

export default function MainPageOwner({navigation}) {

    return (
        <View className=" items-center bg-gray-900 h-screen"> 
            <Text className="text-white"> Poner el logo de la app y el logo del perfil aca arriba</Text>

            <Text className="text-white mt-20 text-base"> ¿Querés crear una nueva sucursal?</Text>
            <HomeButton color="red" title="Crear nueva sucursal" handler={()=>navigation.navigate({name:'Create Branch'})} />

            <Text className="text-white mt-7 text-base"> Tus sucursales </Text>

            <GridScreen />
        </View>
    );

}