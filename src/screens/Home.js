import { Text, Button, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import HomeButton from '../components/HomeButton';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import React, { useState } from "react";

import CineapisLogo from '../components/CineapisLogo';

export default function Home({ navigation }) {
  const [isSignInInProgress, setIsSignInInProgress] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      androidClientId: '30707864319-t052p1ge67gqfjnq53a55mmont2617kr.apps.googleusercontent.com'
    });
  }, []);
  

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Usuario firmado:', userInfo.user);
      navigation.navigate('Main User');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // El usuario canceló el inicio de sesión
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Hay una operación en progreso, como un inicio de sesión en curso
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Los servicios de Google Play no están disponibles o están desactualizados
      } else {
        // Ocurrió otro error
        console.error('Error al iniciar sesión:', error);
      }
    }
  };

  return (
    <ScrollView className='py-5 bg-gray-900'>
      <View className="items-center">
        <CineapisLogo/>
      </View>

      <Text className='text-3xl text-center text-white mx-2.5'>¿Querés comprar entradas?</Text>

      <View className="items-center">
        <HomeButton icon={<Image className='h-10 w-10' source={require('../images/iconoGoogle.png')} />} color='#565656' title='Continuar con Google' handler={signIn} />
      </View>

      <Text className='text-3xl text-center pt-10 text-white'>¿Tenés una sala de cine?</Text>

      <HomeButton color='#FF3131' title='Iniciar sesión' handler={() => navigation.navigate({ name: 'Login' })} />
      <GoogleSigninButton
        style={{ width: 230, height: 48, alignSelf: 'center', marginTop: 20 }}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        disabled={isSignInInProgress}
      />

      <TouchableOpacity className='mb-20' onPress={() => navigation.navigate({ name: 'Register' })}>
        <Text className='text-xl text-center pt-10 text-white'>¿No tenés cuenta? Creala ahora</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
