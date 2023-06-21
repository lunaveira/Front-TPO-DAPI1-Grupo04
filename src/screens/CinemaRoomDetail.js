import { View, Text, Button } from "react-native";
import HomeButton from "../components/HomeButton";
import { useNavigation } from "@react-navigation/native";


export default function CinemaRoomDetail() {

    const navigation = useNavigation();

    const handlerEdit = () => {
        navigation.navigate("Edit Cinema Room");
    };

    return (

        <View className=" items-center bg-gray-900 h-screen">

            <View className="items-center bg-red-400 w-80 h-20 mt-28 rounded-lg ">
                <Text className="text-white text-xl mt-4"> Cantidad de filas: </Text>
            </View>

            <View className="items-center bg-red-400 w-80 h-20 rounded-lg mt-5 ">
                <Text className="text-white text-xl mt-4"> Cantidad de columnas: </Text>
            </View>



            <View className="mb-5 mt-5">
            <HomeButton color='#FF3131' title="Editar sala" handler={handlerEdit}  />
            </View>
            <View className="mb-5 mt-5">
            <HomeButton color='#FF3131' title="Eliminar sala"   />
            </View>


        </View>


    );
}