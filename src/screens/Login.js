import {Text, Button, View, TextInput, TouchableOpacity} from 'react-native'
import HomeButton from '../components/HomeButton';
export default function Login({navigation}) {
    return (
     

      <View className=" items-center bg-gray-900 h-screen">
      <View className="border-white bg-slate-700 border-2 rounded-lg  p-2 mb-2 w-96 mt-60">
        <TextInput className= "text-base text-white text-center " placeholder="Ingresa tu email" placeholderTextColor="white"/>
      </View>

      <View className="border-white bg-slate-700 border-2 rounded-lg  p-2 mb-2 w-96 mt-10">
        <TextInput className= "text-base text-white text-center" placeholder="Ingresa tu contraseña" placeholderTextColor="white" />
      </View>

      <Text className= "text-white mb-10 text-right "> ¿Olvidaste tu constraseña? </Text>
      <HomeButton title="Ingresar" onPress={() => navigation.goBack()} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text className="text-white mt-5">Volver al inicio</Text>
      </TouchableOpacity>

      
    </View>


   
  );
}