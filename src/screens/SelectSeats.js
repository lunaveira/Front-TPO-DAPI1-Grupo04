import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import HomeButton from '../components/HomeButton';

const SelectSeats = () => {
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
            <View className='space-x-2' key={rowIndex} style={styles.seatRow}>
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

            <View style={styles.containerCircles}>
                <View style={[styles.legend, { marginRight: 10 }]}>
                    <View style={[styles.circle, styles.grayCircle]} />
                    <Text style={styles.legendText}>Libres</Text>
                </View>
                <View style={[styles.legend, { marginRight: 10 }]}>
                    <View style={[styles.circle, styles.redCircle]} />
                    <Text style={styles.legendText}>Ocupados</Text>
                </View>
                <View style={styles.legend}>
                    <View style={[styles.circle, styles.greenCircle]} />
                    <Text style={styles.legendText}>Seleccionados</Text>
                </View>
            </View>

            <Text className='text-white text-base text-left'> 14 de julio - 18:00hs</Text>
            <Text className='text-white text-base text-left'> Total: $3500 </Text>

            <HomeButton color='#FF3131' title='Confirmar compra' handler={() => Alert.alert('Compra confirmada', 'Pronto le llegara un email con los datos de su compra')}></HomeButton>
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


    containerCircles: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 5,
    },
    legend: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 5,
    },
    grayCircle: {
        backgroundColor: 'gray',
    },
    redCircle: {
        backgroundColor: 'red',
    },
    greenCircle: {
        backgroundColor: 'green',
    },
    legendText: {
        fontSize: 16,
        color: 'white'
    },
});

export default SelectSeats;
