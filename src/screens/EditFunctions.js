import { View, TextInput } from "react-native";
import HomeButton from "../components/HomeButton";

export default function EditFunctions() {
    return (
        <View className=" items-center bg-gray-900 h-screen">

        <TextInput className=" text-lg text-center text-white w-80 h-12 border-white border mt-28 rounded-lg " placeholder="Nombre pelicula" placeholderTextColor={"white"}>
            
        </TextInput>

        <TextInput className="text-lg text-center text-white w-80 h-12 border-white border rounded-lg mt-5 " placeholder="Sinopsis" placeholderTextColor={"white"}>
          
        </TextInput>

       



       
        <View className="mb-5 mt-5">
            <HomeButton color='#FF3131' title="Guardar" />
        </View>

        </View>
    );
}