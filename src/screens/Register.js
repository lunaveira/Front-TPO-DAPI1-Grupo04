import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import HomeButton from '../components/HomeButton';

export default function Register({navigation}) {

    // ver como achicar las cajas de texto sin que se tape el placeholder

    return(
    <View className=" items-center bg-gray-900 h-screen mt-60">

            <TextInput className= "border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-96 mt-10 h-12 mx-2.5 text-lg text-white text-center " placeholder="Ingresa el nombre de tu empresa" placeholderTextColor="white"/>
    
        
            <TextInput className= "border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-96 mt-10 h-12 mx-2.5 text-lg text-white text-center " placeholder="Ingresa tu email" placeholderTextColor="white"/>
      
    
        <TextInput className= "border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-96 mt-10 h-12 mx-2.5 text-lg text-white text-center" placeholder="Ingresa tu contraseña" placeholderTextColor="white" />
       

      <HomeButton color='#FF3131' title="Registrarse" handler={()=>navigation.navigate({name:'Login'})} />

    

      </View>

    );

}