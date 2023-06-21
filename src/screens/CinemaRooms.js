import { View, Text, Button } from "react-native";
import ListCinemaRoom from "../components/ListCinemaRoom";

export default function CinemaRooms() {
    return (

        <View className=" items-center bg-gray-900 h-screen">

            

            <Text className="text-center text-lg text-white mt-5">Estas en la sucursal</Text>

            <Text className="text-white mt-5"> ACA VA EL NOMBRE DE LA SUCURSAL EN LA Q ESTAS</Text>

            <Button title="Crear sala"></Button>

            <Text className="text-center text-lg text-white mt-5"> Tus salas </Text>

            <ListCinemaRoom /> 



        </View>
    );
}