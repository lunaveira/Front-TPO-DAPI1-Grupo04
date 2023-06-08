import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import HomeButton from '../components/HomeButton';

export default function Register({navigation}) {

    return(
    <View className=" items-center bg-gray-900 h-screen">
        <View className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-96 mt-60 h-13 mx-2.5 ">
            <TextInput className= "text-base text-white text-center " placeholder="Ingresa el nombre de tu empresa" placeholderTextColor="white"/>
        </View>

        <View className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-96 mt-10 h-13 mx-2.5">
            <TextInput className= "text-base text-white text-center " placeholder="Ingresa tu email" placeholderTextColor="white"/>
        </View>

        <View className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 h-13 mx-2.5">
            <TextInput className= "text-base text-white text-center" placeholder="Ingresa tu contraseña" placeholderTextColor="white" />
        </View>

      
      <HomeButton title="Ingresar" handler={()=>navigation.navigate({name:'Main Owner'})} />

      <TouchableOpacity onPress={() => navigation.navigate({name:'Forgot Password'})}>
      <Text className= "text-white mt-7 text-right "> ¿Olvidaste tu constraseña? </Text>
      </TouchableOpacity>

      </View>

    );

}