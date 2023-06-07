import { Text, Button, View, TouchableOpacity } from 'react-native';
import HomeButton from '../components/HomeButton';
import {useAuth0} from 'react-native-auth0';


export default function Home({navigation}) {

  const {authorize} = useAuth0();


  return (
    //tailwind.config.js

    // para hacer una pantalla scrolleable tengo q usar ScrollView


    <View className='justify-center pt-40 bg-gray-900 h-screen' >


      <Text className='text-3xl text-center text-white mx-2.5' >¿Querés comprar entradas?</Text>


      <HomeButton color='#FFF' title='Continuar con Google' handler={() => authorize()}> </HomeButton>

      { /*<Button onPress={() => authorize()} title="Log in" /> */ }

      


      <Text className='text-3xl text-center pt-10 text-white' >¿Tenes una sala de cine?</Text>
  

      <HomeButton color='#FF3131' title='Iniciar sesion' handler={()=>navigation.navigate({name:'Login'})}></HomeButton>



      <TouchableOpacity onPress={() => navigation.navigate({name:'Register'})}>
        <Text className='text-xl text-center pt-10 text-white' >¿No tenes cuenta? Creala ahora</Text>
      </TouchableOpacity>

      

    </View>


  );
}



