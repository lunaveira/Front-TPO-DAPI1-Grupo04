import { View, Text } from "react-native";
import HomeButton from "../components/HomeButton";
import { useNavigation } from "@react-navigation/native";


export default function FunctionDetail() {

    const navigation = useNavigation();

    const handlerEdit = () => {
        navigation.navigate("Edit Function");
    };

    return (

        <View className=" items-center bg-gray-900 h-screen">

            <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
                <Text className="text-white">Titulo</Text>

            </View>

            <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
                <Text className="text-white">Genero</Text>

            </View>

            <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
                <Text className="text-white">Duracion</Text>

            </View>

            <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
                <Text className="text-white">Sinopsis</Text>

            </View>

           

            <View className="rounded-lg border-white place-items-start ml-2 border-2 w-60 h-12 mt-10">
                <Text className="text-white">Agregar imagen</Text>

            </View>





            <HomeButton color='#FF3131' title="Editar" handler={handlerEdit} />
            <HomeButton color='#FF3131' title="Eliminar" />

        </View>
    );
}