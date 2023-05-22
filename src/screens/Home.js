import { Text, Button, View, StyleSheet } from 'react-native';
//import Botones from '../components/HomeButton';


export default function Home({navigation}) {


  return (
    //tailwind.config.js


    <View className='justify-center pt-60' >


      <Text className='text-3xl text-center' >¿Querés comprar entradas?</Text>


      <Button color='#F01313' title='Continuar con Google' onPress={() => navigation.navigate({name:'Login'})}></Button>


      <Text className='text-3xl text-center pt-10' >¿Tenes una sala de cine?</Text>

      <Button color='#F01313' title='Iniciar sesion'></Button>


      <Text className='text-xl text-center pt-10' >¿No tenes cuenta? Creala ahora</Text>

      

    </View>


  );
}



