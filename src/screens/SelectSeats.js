import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SelectSeats = ({ route }) => {
  const { mail, id_funcion, sucursal, cantidad, dia } = route.params;
  console.log("mail:",mail,"id_funcion:",id_funcion,"nombre sucursal:",sucursal,"Cantidad de asientos",cantidad,"dia:",dia);


  const numRows = 5; // Número de filas
  const numColumns = 6; // Número de columnas

  // Inicializar la matriz de asientos
  const initialSeats = Array(numRows)
    .fill()
    .map(() => Array(numColumns).fill(false));

  const [seats, setSeats] = useState(initialSeats);

  // Función para manejar el estado del asiento seleccionado
  const handleSeatPress = (row, column) => {
    const updatedSeats = [...seats];
    updatedSeats[row][column] = !updatedSeats[row][column];
    setSeats(updatedSeats);
  };

  // Función para renderizar los asientos
  const renderSeats = () => {
    return seats.map((seatRow, rowIndex) => (
      <View className='space-x-2'key={rowIndex} style={styles.seatRow}>
        {seatRow.map((isSeatSelected, columnIndex) => (
          <TouchableOpacity
            key={columnIndex}
            onPress={() => handleSeatPress(rowIndex, columnIndex)}
            style={[
              styles.seat,
              isSeatSelected ? styles.selectedSeat : null,
            ]}
            activeOpacity={0.8}
          >
            <Text style={styles.seatText}>{`${rowIndex}${columnIndex}`}</Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ backgroundColor: "rgb(17 24 39)", flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.title} className='text-white text-xl text-center mb-5'>Selecciona tus asientos</Text>
      <View style={styles.seatingPlan}>{renderSeats()}</View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  seatingPlan: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  seat: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedSeat: {
    backgroundColor: 'green',
  },
  seatText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SelectSeats;
