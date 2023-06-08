import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import HomeButton from '../components/HomeButton';

export default function Register({navigation}) {

    // ver como achicar las cajas de texto sin que se tape el placeholder

    return(
    <View className=" items-center bg-gray-900 h-screen">
    
        <View className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-96 mt-60 h-12 mx-2.5 ">
            <TextInput className= "text-base text-white text-center " placeholder="Ingresa el nombre de tu empresa" placeholderTextColor="white"/>
        </View>

        <View className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-96 mt-10 h-13 mx-2.5">
            <TextInput className= "text-base text-white text-center " placeholder="Ingresa tu email" placeholderTextColor="white"/>
        </View>

        <View className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 h-13 mx-2.5">
            <TextInput className= "text-base text-white text-center" placeholder="Ingresa tu contraseña" placeholderTextColor="white" />
        </View>

      
      <HomeButton color='#FF3131' title="Registrarse" handler={()=>navigation.navigate({name:'Login'})} />

    

      </View>

    );

}