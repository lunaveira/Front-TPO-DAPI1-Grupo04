import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
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
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ company, email, password })
      });

      if (response.ok) {
        const validationLink = generateValidationLink();
        await sendValidationEmail(email, validationLink);
        navigation.navigate('Login');
      } else {
        console.log('Error en el registro');
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function sendValidationEmail(email, validationLink) {
    try {
      const sendGridAPIKey = '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';
      const sendGridEndpoint = 'https://api.sendgrid.com/v3/mail/send';

      const payload = {
        personalizations: [
          {
            to: [{ email: email }],
            subject: 'Verificación de correo electrónico',
          },
        ],
        from: { email: 'juangarassino@outlook.es'},
        content: [
          {
            type: 'text/plain',
            value: `Por favor, haz clic en el siguiente enlace para verificar tu correo electrónico: ${validationLink}`,
          },
        ],
      };

      const response = await fetch(sendGridEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sendGridAPIKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Correo de validación enviado');
      } else {
        console.log('Error al enviar el correo de validación');
      }
    } catch (error) {
      console.error('Error al enviar el correo de validación:', error);
    }
  }

  function generateValidationLink() {
    // Genera un token único o un identificador de usuario para el enlace de validación
    const validationToken = generateRandomToken(); // Genera un token aleatorio, puedes implementar tu propia lógica aquí
    const validationLink = `https://tudominio.com/validate/${validationToken}`;

    return validationLink;
  }

  function generateRandomToken() {
    // Genera un token aleatorio utilizando algún algoritmo o librería de generación de tokens
    // Puedes utilizar Math.random() o una librería como uuid para generar el token
    // Aquí tienes un ejemplo básico utilizando Math.random()
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const tokenLength = 32; // Longitud del token deseado
    let token = '';

    for (let i = 0; i < tokenLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }

    return token;
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
