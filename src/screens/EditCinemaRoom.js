import { View, Text} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function EditCinemaRoom() {
    return (

        <View className=" items-center bg-gray-900 h-screen">

            <TextInput className="items-center bg-red-400 w-80 h-20 mt-28 rounded-lg ">
                <Text className="text-white text-xl mt-4"> Cantidad de filas: </Text>
            </TextInput>

            <TextInput className="items-center bg-red-400 w-80 h-20 rounded-lg mt-5 ">
                <Text className="text-white text-xl mt-4"> Cantidad de columnas: </Text>
            </TextInput>



            <View className="mb-5 mt-5">
                <HomeButton color='#FF3131' title="Editar sala" handler={handlerEdit} />
            </View>
            <View className="mb-5 mt-5">
                <HomeButton color='#FF3131' title="Eliminar sala" />
            </View>


        </View>
    );
}