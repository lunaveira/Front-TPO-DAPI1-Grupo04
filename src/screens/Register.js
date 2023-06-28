import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import HomeButton from '../components/HomeButton';
import CineapisLogo from '../components/CineapisLogo';
import Mailer from 'react-native-mail';

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
        // Envío de correo de confirmación
        sendConfirmationEmail(email);
        navigation.navigate('Login');
      } else {
        console.log('Error en el registro');
      }
    } catch (err) {
      console.log(err);
    }
  }

  function sendConfirmationEmail(email) {
    const body = 'Gracias por registrarte. Por favor, confirma tu registro haciendo clic en el siguiente enlace.';

    Mailer.mail({
      subject: 'Confirmación de registro',
      recipients: [email],
      body: body,
      isHTML: false,
      // Configuración del servidor de correo saliente (SMTP)
      // Asegúrate de proporcionar los valores correctos según tu servidor de correo
      // Consulta la documentación de tu proveedor de correo para obtener los detalles necesarios
      // Solo se requieren los campos necesarios para tu configuración específica
      // Consulta la documentación de la biblioteca react-native-mail para obtener más detalles
      sender: 'tu_correo@dominio.com',
      password: 'tu_contraseña',
      port: 587,
      ssl: false,
      smtp: 'smtp.example.com',
    }, (error, event) => {
      if (error) {
        console.log('Error al enviar el correo de confirmación:', error);
      } else {
        console.log('Correo de confirmación enviado correctamente');
      }
    });
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