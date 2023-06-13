import { Text, Button, View, TextInput, TouchableOpacity } from 'react-native'
import HomeButton from '../components/HomeButton';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



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

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      if (token) {
        // Hay un token almacenado, navegar a la página de Main Owner
        navigation.navigate('Main Owner');
      }
    } catch (e) {
      // error al leer el token
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
      }

    } catch (err) {
      console.log(err);
    }
  }

  return (


    <View className=" items-center bg-gray-900 h-screen">

      <TextInput value={email} onChangeText={(text) => setEmail(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 h-13 mx-2.5 text-base text-white text-center " placeholder="Ingresa tu email" placeholderTextColor="white" />


      <TextInput secureTextEntry value={password} onChangeText={(text) => setPassword(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-10 h-13 mx-2.5 text-base text-white text-center" placeholder="Ingresa tu contraseña" placeholderTextColor="white" />


      <HomeButton color='#FF3131' title="Ingresar" handler={handleLogin} />

      <Button onPress={() => navigation.navigate({ name: 'Main Owner' })} title='prueba'></Button>

      <TouchableOpacity onPress={() => navigation.navigate({ name: 'Forgot Password' })}>
        <Text className="text-white mt-7 text-right "> ¿Olvidaste tu contraseña? </Text>
      </TouchableOpacity>



    </View>



  );
}