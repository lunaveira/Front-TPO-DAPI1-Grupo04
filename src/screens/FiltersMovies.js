import { Text, ScrollView, TextInput, View } from "react-native"
import { useState } from 'react';
import MoviesGrid from "../components/MoviesGrid";
import { Picker } from '@react-native-picker/picker';

export default function FiltersMovies() {
    const [branch, setBranch] = useState("Sucursal");
    const [title, setTitle] = useState("Titulo");
    const [genre, setGenre] = useState("Género");
    const [rating, setRating] = useState("Calificacion");

    return (
        <ScrollView className="px-5 bg-gray-900 h-screen" contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
            <Picker
                style={{ height: 40, width: '90%', backgroundColor: 'gray', marginBottom: 10, marginTop: 60, color: 'white', borderRadius: 10 }}
                selectedValue={branch}
                onValueChange={(itemValue, itemIndex) => setBranch(itemValue)}
            >
                <Picker.Item label="Sucursal" />
                <Picker.Item label="sucursal 1" value="sucursal 1" />
                <Picker.Item label="sucursal 2" value="sucursal 2" />
            </Picker>

            <Picker
                style={{ height: 40, width: '90%', backgroundColor: 'gray', marginBottom: 10, color: 'white', borderRadius: 10 }}
                selectedValue={title}
                onValueChange={(itemValue, itemIndex) => setTitle(itemValue)}
            >
                <Picker.Item label="Titulo" />
                <Picker.Item label="La sirenita" value="La sirenita" />
                <Picker.Item label="El Caballero Oscuro" value="El Caballero Oscuro" />
            </Picker>

            <Picker
                style={{ height: 40, width: '90%', backgroundColor: 'gray', marginBottom: 10, color: 'white', borderRadius: 10 }}
                selectedValue={rating}
                onValueChange={(itemValue, itemIndex) => setRating(itemValue)}
            >
                <Picker.Item label="Calificacion"  />
                <Picker.Item label="menor a 3" value="menor a 3" />
                <Picker.Item label="mayor a 3" value="mayor a 3" />
            </Picker>

            <Picker
                style={{ height: 40, width: '90%', backgroundColor: 'gray', marginBottom: 10, color: 'white', borderRadius: 10 }}
                selectedValue={genre}
                onValueChange={(itemValue, itemIndex) => setGenre(itemValue)}
            >
                <Picker.Item label="Genero"  />
                <Picker.Item label="acción" value="acción" />
                <Picker.Item label="fantasía" value="fantasía" />
            </Picker>

           
        </ScrollView>
    )
}
