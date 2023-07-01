



import React, { useState } from 'react';
import { ScrollView, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function EditBranches({ route }) {
  const { sucursal } = route.params;
  const [nombre, setNombre] = useState(sucursal.nombre);
  const [pais, setPais] = useState(sucursal.pais);
  const [provincia, setProvincia] = useState(sucursal.provincia);
  const [localidad, setLocalidad] = useState(sucursal.localidad);
  const [calle, setCalle] = useState(sucursal.calle);
  const [altura, setAltura] = useState(sucursal.altura);
  const [precioPorFuncion, setPrecioPorFuncion] = useState(sucursal.precio_por_funcion);
  const [isTemporarilyClosed, setIsTemporarilyClosed] = useState(sucursal.cerrado_temporalmente);

  const handleUpdate = async () => {
    try {
      // Realizar la solicitud PUT al endpoint de actualización de sucursal
      const response = await fetch('https://backendmobile-production.up.railway.app/api/cinema/branches/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: sucursal.id,
          nombre,
          pais,
          provincia,
          localidad,
          calle,
          altura,
          precio_por_funcion: precioPorFuncion,
          cerrado_temporalmente: isTemporarilyClosed,
        }),
      });

      if (response.ok) {
        Alert.alert('Sucursal actualizada', 'La sucursal se ha actualizado correctamente.');
        // Realizar la navegación a la página principal del propietario
        navigation.replace('Main Owner');
      } else {
        Alert.alert('Error', 'Hubo un problema al actualizar la sucursal. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al actualizar la sucursal:', error);
      Alert.alert('Error', 'Hubo un problema al actualizar la sucursal. Por favor, intenta nuevamente.');
    }
  };

  return (
    <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        className=" h-11 w-72 border-white border-2 rounded-lg mb-5 text-base text-center text-white justify-center mt-1"
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
        placeholderTextColor="white"
      />
      <TextInput
        className=" h-11 w-72 border-white border-2 rounded-lg mb-5 text-base text-center text-white justify-center mt-1"
        value={pais}
        onChangeText={setPais}
        placeholder="País"
        placeholderTextColor="white"
      />
      <TextInput
        className=" h-11 w-72 border-white border-2 rounded-lg mb-5 text-base text-center text-white justify-center mt-1"
        value={provincia}
        onChangeText={setProvincia}
        placeholder="Provincia"
        placeholderTextColor="white"
      />
      <TextInput
        className=" h-11 w-72 border-white border-2 rounded-lg mb-5 text-base text-center text-white justify-center mt-1"
        value={localidad}
        onChangeText={setLocalidad}
        placeholder="Localidad"
        placeholderTextColor="white"
      />
      <TextInput
        className=" h-11 w-72 border-white border-2 rounded-lg mb-5 text-base text-center text-white justify-center mt-1"
        value={calle}
        onChangeText={setCalle}
        placeholder="Calle"
        placeholderTextColor="white"
      />
      <TextInput
        className=" h-11 w-72 border-white border-2 rounded-lg mb-5 text-base text-center text-white justify-center mt-1"
        value={altura.toString()}
        onChangeText={(text) => setAltura(parseInt(text))}
        placeholder="Altura"
        placeholderTextColor="white"
        keyboardType="numeric"
      />
      <TextInput
        className=" h-11 w-72 border-white border-2 rounded-lg mb-5 text-base text-center text-white justify-center mt-1"
        value={precioPorFuncion.toString()}
        onChangeText={(text) => setPrecioPorFuncion(parseFloat(text))}
        placeholder="Precio por función"
        placeholderTextColor="white"
        keyboardType="numeric"
      />
      <Picker
        style={{ height: 24, width: '100%', backgroundColor: 'white' }}
        selectedValue={isTemporarilyClosed}
        onValueChange={(itemValue, itemIndex) => setIsTemporarilyClosed(itemValue)}>
        <Picker.Item label="Si" value={true} />
        <Picker.Item label="No" value={false} />
      </Picker>
      <Button title="Guardar cambios" onPress={handleUpdate} />
    </ScrollView>
  );
}

const styles = {
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
};
