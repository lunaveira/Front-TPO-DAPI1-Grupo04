import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import HomeButton from '../components/HomeButton';

const SelectSeats = ({ route, navigation }) => {
  const { mail, id_funcion, sucursal, cantidad, dia,id_sala } = route.params;
  const [numRows, setNumRows] = useState(0);
  const [numColumns, setNumColumns] = useState(0);
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);


  useEffect(() => {
    fetchFilaColumna();
  }, []);

  const fetchFilaColumna = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/api/salas/${id_sala}/getfilasycolumnas`);
      if (response.ok) {
        const data = await response.json();
        const rows = data.map((item) => item.fila);
        const columns = data.map((item) => item.columna);
        const maxRow = Math.max(...rows);
        const maxColumn = Math.max(...columns);
        setNumRows(maxRow);
        setNumColumns(maxColumn);
        initializeSeats(maxRow, maxColumn);
      } else {
        console.error('Error al obtener las filas y columnas:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const initializeSeats = (rows, columns) => {
    const initialSeats = Array(rows)
      .fill()
      .map(() => Array(columns).fill(false));
    setSeats(initialSeats);
  };

  const handleSeatPress = (row, column) => {
    const seatNumber = row * numColumns + column + 1;
  const seatIndex = selectedSeats.indexOf(seatNumber);

  if (seatIndex !== -1) {
    // Si el asiento ya está seleccionado, lo eliminamos de los asientos seleccionados
    const updatedSeats = [...selectedSeats];
    updatedSeats.splice(seatIndex, 1);
    setSelectedSeats(updatedSeats);
  } else {
    // Si el asiento no está seleccionado y aún se pueden seleccionar más asientos
    if (selectedSeats.length < cantidad) {
      const updatedSeats = [...selectedSeats, seatNumber];
      setSelectedSeats(updatedSeats);
    }
  }
  };

  const renderSeats = () => {
    return seats.map((seatRow, rowIndex) => (
      <View key={rowIndex} style={styles.seatRow}>
        {seatRow.map((isSeatSelected, columnIndex) => {
          const seatNumber = rowIndex * numColumns + columnIndex +1;
          return (
            <TouchableOpacity
              key={columnIndex}
              onPress={() => handleSeatPress(rowIndex, columnIndex)}
              style={[
                styles.seat,
                isSeatSelected ? styles.selectedSeat : null,
                selectedSeats.includes(seatNumber) ? styles.highlightedSeat : null,
              ]}
              activeOpacity={0.8}
            >
              <Text style={styles.seatText}>{seatNumber}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    ));
  };
  

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ backgroundColor: "rgb(17 24 39)", flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.title} className='text-white text-xl text-center mb-5'>Selecciona tus asientos</Text>
      <View style={styles.seatingPlan}>{renderSeats()}</View>
    </View>

    <HomeButton title='Confirmar' handler={() => navigation.navigate({ name: 'Reservations' })} color='#FF3131'> </HomeButton>
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
    width: 40, // Ajusta el ancho del cuadrado de selección
    height: 40, // Ajusta la altura del cuadrado de selección
    marginHorizontal: 5, // Agrega una separación horizontal entre los asientos
  },
  selectedSeat: {
    backgroundColor: 'green',
  },
  seatText: {
    color: '#fff',
    fontSize: 16,
  },
  highlightedSeat: {
    backgroundColor: 'green',
  },
  
});


export default SelectSeats;
