import { Text, Button, View, TouchableOpacity, Image } from 'react-native';
import HomeButton from '../components/HomeButton';
import {useAuth0} from 'react-native-auth0';
import{ ScrollView } from 'react-native';

import CineapisLogo from '../components/CineapisLogo';

import React from 'react';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';



export default function Home({ navigation }) {
  // Configurar Google Sign-In al cargar el componente
  React.useEffect(() => {
    configureGoogleSignin();
  }, []);

  // Función para configurar Google Sign-In
  const configureGoogleSignin = async () => {
    await GoogleSignin.configure({
      webClientId: '672636115149-703va8nik3tjje3ftp2b5mrq69amcquj.apps.googleusercontent.com',
      offlineAccess: true, // Habilitar el acceso offline
      forceCodeForRefreshToken: true, // Forzar el uso de un código para obtener un token de actualización
      packageName: 'com.example'
    });
  };

  // Función para manejar el inicio de sesión con Google
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Usuario de Google:', userInfo);
      // Aquí puedes realizar las acciones necesarias con la información del usuario de Google

      // Navegar a otra pantalla
      navigation.navigate('Main User');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // El usuario canceló el inicio de sesión
        console.log('Inicio de sesión con Google cancelado');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Hay una operación de inicio de sesión en progreso
        console.log('Inicio de sesión con Google en progreso');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Los servicios de Google Play no están disponibles en el dispositivo
        console.log('Servicios de Google Play no disponibles');
      } else {
        // Ocurrió un error desconocido
        console.error('Error al iniciar sesión con Google:', error);
      }
    }
  };

  return (

    <ScrollView className='py-5 bg-gray-900 ' >
      <View className="items-center">
      <CineapisLogo/>
      </View>
      
      


      <Text className='text-3xl text-center text-white mx-2.5' >¿Querés comprar entradas?</Text>

      

      <View className="items-center">

      <HomeButton icon= {<Image className='h-10 w-10'source={require('../images/iconoGoogle.png')}/> }
      color='#565656' title='Continuar con Google' handler={() => handleGoogleSignIn()}> 
     
       </HomeButton>

       </View>


      <Text className='text-3xl text-center pt-10 text-white' >¿Tenes una sala de cine?</Text>

      <Button onPress={() => navigation.navigate({name:'Main User'})} title='Usuarios'></Button>

      <HomeButton color='#FF3131' title='Iniciar sesion' handler={()=>navigation.navigate({name:'Login'})}></HomeButton>



      <TouchableOpacity className='mb-20' onPress={() => navigation.navigate({name:'Register'})}>
        <Text className='text-xl text-center pt-10 text-white' >¿No tenes cuenta? Creala ahora</Text>
      </TouchableOpacity>

      

    </ScrollView>


  );
}



