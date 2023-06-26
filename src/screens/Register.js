import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useState } from 'react';
import HomeButton from '../components/HomeButton';
import CineapisLogo from '../components/CineapisLogo';


export default function Register({ navigation }) {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleRegister() {
    try {
      console.log(email);
      console.log(password);
      console.log(company);


      const response = await fetch("https://backendmobile-production.up.railway.app/api/users", {
        body: JSON.stringify({ company, email, password }),
        headers: { 'Content-Type': 'application/json' },
        method: "POST"
      });


      if (response.ok) {

        navigation.navigate('Login');
      } else {

        console.log('Error en el registro');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      <CineapisLogo></CineapisLogo>
      <TextInput value={company} onChangeText={(text) => setCompany(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-96 mt-2 h-12 mx-2.5 text-lg text-white text-center " placeholder="Ingresa el nombre de tu empresa" placeholderTextColor="white" />


      <TextInput value={email} onChangeText={(text) => setEmail(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-1 w-96 mt-5 h-12 mx-2.5 text-lg text-white text-center " placeholder="Ingresa tu email" placeholderTextColor="white" />


      <TextInput secureTextEntry value={password} onChangeText={(text) => setPassword(text)} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-5 w-96 mt-5 h-12 mx-2.5 text-lg text-white text-center" placeholder="Ingresa tu contraseña" placeholderTextColor="white" />




      <HomeButton color='#FF3131' title="Registrarse" handler={handleRegister} />



    </ScrollView>

  );

}