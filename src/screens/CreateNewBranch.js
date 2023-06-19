import {View, Text, TextInput, Button} from 'react-native'
import HomeButton from '../components/HomeButton';
import React, { useState } from "react";


export default function CreateNewBranch({navigation}) {

    const [branchName, setBranchName] = useState("");
    const [country, setCountry] = useState("");
    const [province, setProvince] = useState("");
    const [location, setLocation] = useState("");
    const [street, setStreet] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
  
    const handleCreateBranch = async () => {
      try {
        const response = await fetch("https://backendmobile-production.up.railway.app/api/cinema/:id_cinema/branches", {
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
          }),
        });
  
        if (response.status === 200) {
          // La sucursal se creó exitosamente
          navigation.navigate("Create Branch 2");
        } else if (response.status === 400) {
          const errorMessage = await response.text();
          console.error("Error al crear la sucursal:", errorMessage);
        } else {
          console.error("Error al crear la sucursal");
        }
      } catch (error) {
        console.error("Error al conectarse con el servidor:", error);
      }
    };
  

    return (
        <View className=" items-center bg-gray-900 h-screen"> 
          

        <TextInput value={branchName}
        onChangeText={setBranchName} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 h-13 
        mx-2.5 text-base text-white text-center " 
        placeholder="Nombre de la nueva sucursal" placeholderTextColor="white" />

        <TextInput value={country}
        onChangeText={setCountry} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Pais / esto tiene q ser dropdown" placeholderTextColor="white" />

        <TextInput value={province}
        onChangeText={setProvince} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Provincia / esto tiene q ser dropdown" placeholderTextColor="white" />

        <TextInput value={location}
        onChangeText={setLocation} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Localidad" placeholderTextColor="white" />

        <TextInput value={street}
        onChangeText={setStreet} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Calle" placeholderTextColor="white" />

        <TextInput value={streetNumber}
        onChangeText={setStreetNumber} className="border-white bg-slate-700 border-2 rounded-lg p-2 mb-4 w-96 mt-5 
        h-13 mx-2.5 text-base text-white text-center" 
        placeholder="Altura" placeholderTextColor="white" />

        <Button onPress={() => navigation.navigate({ name: 'Create Branch 2' })} title='Siguiente'></Button>

           
        </View>
    );

}