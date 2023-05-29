import { Text, Button, View, StyleSheet } from 'react-native';
import HomeButton from '../components/HomeButton';


export default function Home({navigation}) {


  return (
    //tailwind.config.js

    // para hacer una pantalla scrolleable tengo q usar ScrollView


    <View className='justify-center pt-40 bg-gray-900 h-screen' >


      <Text className='text-3xl text-center text-white ' >¿Querés comprar entradas?</Text>


      <HomeButton color='#FF3131' title='Continuar con Google' > </HomeButton>


      <Text className='text-3xl text-center pt-10 text-white' >¿Tenes una sala de cine?</Text>
  

      <HomeButton color='#FF3131' title='Iniciar sesion' handler={()=>navigation.navigate({name:'Login'})}></HomeButton>


      <Text className='text-xl text-center pt-10 text-white' >¿No tenes cuenta? Creala ahora</Text>

      

    </View>


  );
}



