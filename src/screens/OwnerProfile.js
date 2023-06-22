import { Text, TextInput, View, StyleSheet, Image, Button} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function ProfileLogo({ navigation }) {


    async function handleLogout() {

        AsyncStorage.removeItem('@token');

        navigation.navigate('Home');
        
        
      }



    return (


        <View className=" items-center bg-gray-900 h-screen">

            


            <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-80 mt-10 h-13 mx-2.5 text-base text-white text-center " placeholder="Nombre de la empresa" placeholderTextColor="white" />

            <TextInput className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-80 mt-5 h-13 mx-2.5 text-base text-white text-center " placeholder="Email" placeholderTextColor="white" />

            <TextInput secureTextEntry className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-80 mt-5 h-13 mx-2.5 text-base text-white text-center " placeholder="Contraseña" placeholderTextColor="white" />

            <Button onPress={handleLogout} title='logout'></Button>
        </View>
    );

}