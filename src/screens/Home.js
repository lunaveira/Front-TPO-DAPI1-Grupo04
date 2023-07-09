import { Text, Button, View, TouchableOpacity, Image } from 'react-native';
import HomeButton from '../components/HomeButton';
import {useAuth0} from 'react-native-auth0';
import{ ScrollView } from 'react-native';

import CineapisLogo from '../components/CineapisLogo';


export default function Home({navigation}) {

  const {authorize} = useAuth0();


  return (
    //tailwind.config.js

    // para hacer una pantalla scrolleable tengo q usar ScrollView

    


    <ScrollView className='py-5 bg-gray-900 ' >
      <View className="items-center">
      <CineapisLogo/>
      </View>
      
      


      <Text className='text-3xl text-center text-white mx-2.5' >¿Querés comprar entradas?</Text>

      

      {/* <View className="items-center">

      <HomeButton icon= {<Image className='h-10 w-10'source={require('../images/iconoGoogle.png')}/> }
      color='#565656' title='Continuar con Google' handler={() => authorize()}> 
     
       </HomeButton>

       </View> */}

<View className="items-center">

<HomeButton icon= {<Image className='h-10 w-10'source={require('../images/iconoGoogle.png')}/> }
color='#565656' title='Continuar con Google' handler={()=>navigation.navigate({name:'Main User'})}> 

 </HomeButton>

 </View>

    

      { /*<Button onPress={() => authorize()} title="Log in" /> */ }

      


      <Text className='text-3xl text-center pt-10 text-white' >¿Tenes una sala de cine?</Text>

      {/* <Button onPress={() => navigation.navigate({name:'Main User'})} title='Usuarios'></Button> */}

      <HomeButton color='#FF3131' title='Iniciar sesion' handler={()=>navigation.navigate({name:'Login'})}></HomeButton>



      <TouchableOpacity className='mb-20' onPress={() => navigation.navigate({name:'Register'})}>
        <Text className='text-xl text-center pt-10 text-white' >¿No tenes cuenta? Creala ahora</Text>
      </TouchableOpacity>

      

    </ScrollView>


  );
}



