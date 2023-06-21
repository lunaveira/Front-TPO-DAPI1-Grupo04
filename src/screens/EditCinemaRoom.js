import { View, Text, TextInput} from "react-native";

import HomeButton from "../components/HomeButton";

export default function EditCinemaRoom() {
    return (

        <View className=" items-center bg-gray-900 h-screen">

            <TextInput className=" text-lg text-center text-white bg-red-400 w-80 h-20 mt-28 rounded-lg " placeholder="Cantidad de filas" placeholderTextColor={"white"}>
                
            </TextInput>

            <TextInput className="text-lg text-center text-white bg-red-400 w-80 h-20 rounded-lg mt-5 " placeholder="Cantidad de columnas" placeholderTextColor={"white"}>
              
            </TextInput>



           
            <View className="mb-5 mt-5">
                <HomeButton color='#FF3131' title="Guardar" />
            </View>


        </View>
    );
}