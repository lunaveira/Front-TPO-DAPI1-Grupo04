import { View, Text, Button } from "react-native";
import ListCinemaRoom from "../components/ListCinemaRoom";
import { useNavigation } from "@react-navigation/native";

export default function CinemaRooms() {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Cinema Room Detail");
    };

    return (

        <View className=" items-center bg-gray-900 h-screen">

            

            <Text className="text-center text-lg text-white mt-5">Estas en la sucursal</Text>

            <Text className="text-white mt-5"> ACA VA EL NOMBRE DE LA SUCURSAL EN LA Q ESTAS</Text>

            <Button title="Crear sala" onPress={() => navigation.navigate({ name: 'Create Cinema Room' })}></Button>

            <Text className="text-center text-lg text-white mt-5"> Tus salas </Text>

            <ListCinemaRoom title="sala 1" handler={handlePress}/> 



        </View>
    );
}