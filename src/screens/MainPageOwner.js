import {View, Text} from 'react-native'
import HomeButton from '../components/HomeButton';

export default function MainPageOwner({navigation}) {

    return (
        <View className=" items-center bg-gray-900 h-screen"> 
            <Text className="text-white"> Poner el logo de la app y el logo del perfil aca arriba</Text>

            <Text className="text-white mt-20 text-base"> ¿Querés crear una nueva sucursal?</Text>
            <HomeButton title="Crear nueva sucursal"></HomeButton>

            <Text className="text-white mt-7 text-base"> Tus sucursales </Text>
        </View>
    );

}