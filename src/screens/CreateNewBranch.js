import { View, Text, TextInput, Button, Image } from 'react-native'
import HomeButton from '../components/HomeButton';
import React, { useEffect, useState } from "react";
import { launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atob } from 'react-native-quick-base64';
import { Picker } from '@react-native-picker/picker';



export default function CreateNewBranch({ navigation }) {

  const [branchName, setBranchName] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [location, setLocation] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [photo64, setPhoto64] = useState("");
  const [functionPrice, setFunctionPrice] = useState(0);
  const [isTemporarilyClosed, setIsTemporarilyClosed] = useState(false);






  /*value={isTemporarilyClosed}
      onChangeText={setIsTemporarilyClosed}*/


  const handleCreateBranch = async () => {
    try {
      const token_encriptado = await AsyncStorage.getItem('@token')
      const idSocio = JSON.parse(atob(token_encriptado.split('.')[1]))
      const responseSocio = await fetch(`https://backendmobile-production.up.railway.app/api/socios/${idSocio.user.id}`, {
        headers: {
          Authorization: `Bearer ${token_encriptado}`,
        },
      });
      if (responseSocio.ok) {
        const dataSocio = await responseSocio.json();
        const socio = dataSocio.socio[0]; // Suponemos que el socio se encuentra en la primera posición del arreglo devuelto
        const response = await fetch(`https://backendmobile-production.up.railway.app/api/cinema/${socio.id_empresa}/branches`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: branchName,
            pais: country,
            provincia: province,
            localidad: location,
            calle: street,
            altura: streetNumber,
            imagen: photo64.base64,
            precio: functionPrice,
            cerrado: isTemporarilyClosed
          }),
        });

        console.log("Estado de respuesta:", response.status);
        console.log("Respuesta completa:", response);

        if (response.status === 200) {
          // La sucursal se creó exitosamente


          navigation.replace("Main Owner");

        } else if (response.status === 400) {
          const errorMessage = await response.text();
          console.error("Error al crear la sucursal:", errorMessage);
        } else {
          console.error("Error al crear la sucursal");
        }

      } else {
        console.error("Error al obtener los datos del socio");
      }


    } catch (error) {
      console.error("Error al conectarse con el servidor:", error);
    }
  };


  return (
    <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>


      <TextInput value={branchName}
        onChangeText={setBranchName} style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Nombre de la nueva sucursal" placeholderTextColor="white" />

      <TextInput value={country}
        onChangeText={setCountry} style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Pais" placeholderTextColor="white" />

      <TextInput value={province}
        onChangeText={setProvince} style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Provincia" placeholderTextColor="white" />

      <TextInput value={location}
        onChangeText={setLocation} style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Localidad" placeholderTextColor="white" />

      <TextInput value={street}
        onChangeText={setStreet} style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Calle" placeholderTextColor="white" />

      <TextInput keyboardType='numeric' value={streetNumber}
        onChangeText={userInput => setStreetNumber(Number(userInput))} style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Altura" placeholderTextColor="white" />



      <TextInput keyboardType='numeric'
        value={functionPrice}
        onChangeText={userInput => setFunctionPrice(Number(userInput))}
        style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        placeholder="Precio de la función"
        placeholderTextColor="white" />


      <Picker style={{ width: "100%", backgroundColor: "#333", borderRadius: 10, padding: 10, marginBottom: 10, color: "#fff" }}
        selectedValue={isTemporarilyClosed}
        onValueChange={(itemValue, itemIndex) =>
          setIsTemporarilyClosed(itemValue)
        }>
        <Picker.Item className="h-24 w-24 bg-white text-white" label="Cerrado temporalmente" />
        <Picker.Item className="h-24 w-24 bg-white text-white" label="Si" value={true} />
        <Picker.Item className="h-24 w-24 bg-white text-white" label="No" value={false} />
      </Picker>


      <View>

        <HomeButton color='#333' title="cargar imagen" handler={() => launchImageLibrary({ mediaType: 'photo', maxWidth: 10, maxHeight: 10, includeBase64: true }).then(res => setPhoto64(res.assets[0])).catch(err => console.log(err))}></HomeButton>

        <Image source={photo64} />

      </View>

      <HomeButton color='#FF3131' handler={handleCreateBranch} title='Siguiente'></HomeButton>


    </ScrollView>
  );

}