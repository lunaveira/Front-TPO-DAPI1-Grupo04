import { Text, Button, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import HomeButton from '../components/HomeButton';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';



export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@token', value);
    } catch (e) {
      // error al guardar
    }
  };



  async function handleLogin() {
    try {
      console.log(email);
      console.log(password);

      const response = await fetch("https://backendmobile-production.up.railway.app/api/auths", {
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        method: "POST"
      });

      const json = await response.json();
      console.log(json);

      if (json.token) {
        // Guardar el token utilizando AsyncStorage
        await storeData(json.token);

        // Navegar a la página de Main Owner
        navigation.navigate('Main Owner');
      } else {
        // Manejar el caso cuando las credenciales son inválidas
        console.log('Credenciales inválidas');
        Alert.alert('Ingreso inválido', 'El email o la constraseña son incorrectos', [
          // {
          //   text: 'Cancel',
          //   onPress: () => console.log('Cancel Pressed'),
          //   style: 'cancel',
          // },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }

    } catch (err) {
      console.log(err);
    }
  }

  return (


    <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{alignItems:'center',justifyContent:'center'}}>

      <TextInput value={email} onChangeText={(text) => setEmail(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-80 mt-5 h-13 mx-2.5 text-base text-white text-center " placeholder="Ingresa tu email" placeholderTextColor="white" />


      <TextInput secureTextEntry value={password} onChangeText={(text) => setPassword(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-80 mt-10 h-13 mx-2.5 text-base text-white text-center" placeholder="Ingresa tu contraseña" placeholderTextColor="white" />


      <HomeButton color='#FF3131' title="Ingresar" handler={handleLogin} />

      
      <TouchableOpacity onPress={() => navigation.navigate({ name: 'Forgot Password' })}>
        <Text className="text-white mt-7 text-right "> ¿Olvidaste tu contraseña? </Text>
      </TouchableOpacity>


      



    </ScrollView>



  );
}