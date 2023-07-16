import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const Reservations = ({route}) => {
  const [reservas, setReservas] = useState([]);
  const { userId } = route.params;

  useEffect(() => {
    fetchReservas();
  }, []);

  const fetchReservas = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/api/reservas/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setReservas(data);
      } else {
        console.error('Error al obtener las reservas:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  

  return (
    <ScrollView className='py-5 bg-gray-900'>
        <Text className='text-center text-white text-xl mb-5'>Mis reservas</Text>
      {reservas.map((reserva, index) => (
        <View key={index} style={styles.reservaContainer}>
          <Text style={styles.text}>Sucursal: {reserva.sucursal}</Text>
          <Text style={styles.text}>Número de Sala: {reserva.numero_sala}</Text>
          <Text style={styles.text}>Día de la función: {reserva.dia}</Text>
          <Text style={styles.text}>Horario de la función: {reserva.horario}</Text>
          <Text style={styles.text}>Título de la película: {reserva.titulo}</Text>
          <Text style={styles.text}>Cantidad de entradas: {reserva.cantidad_entradas}</Text>
          <Text style={styles.text}>Número de asientos: {reserva.nro_asiento}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  reservaContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Reservations;
