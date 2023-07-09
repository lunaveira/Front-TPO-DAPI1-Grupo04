import { Text, ScrollView, TextInput, View} from "react-native"
import { useState } from 'react';
import MoviesGrid from "../components/MoviesGrid";
import { Picker } from '@react-native-picker/picker';


export default function FiltersMovies() {
    const [branch, setBranch] = useState("Sucursal");
    const [title, setTitle] = useState("Titulo");
    const [genre, setGenre] = useState("Género");
    const [rating, setRating] = useState("Calificacion");

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: '#5C5C5C', flex: 1 }}>

            <Picker style={{ height: 24, width: '100%', backgroundColor: '#FFFFFF', itemColor: 'white' }}   
                selectedValue={branch}
                onValueChange={(itemValue, itemIndex) =>
                setBranch(itemValue)
            }>
                <Picker.Item className="h-24 w-24 bg-white text-white" label="sucursal 1" value="sucursal 1" />
                <Picker.Item className="h-24 w-24 bg-white text-white" label="sucursal 2" value="sucursal 2" />
            </Picker>

            
            <Picker style={{ height: 24, width: '100%', backgroundColor: '#FFFFFF', itemColor: 'white' }}   
                selectedValue={title}
                onValueChange={(itemValue, itemIndex) =>
                    setTitle(itemValue)
            }>
                <Picker.Item className="h-24 w-24 bg-white text-white" label="La sirenita" value="La sirenita" />
                <Picker.Item className="h-24 w-24 bg-white text-white" label="El Caballero Oscuro" value="El Caballero Oscuro" />
            </Picker>

            <Picker style={{ height: 24, width: '100%', backgroundColor: '#FFFFFF', itemColor: 'white' }}   
                selectedValue={genre}
                onValueChange={(itemValue, itemIndex) =>
                setGenre(itemValue)
            }>
                <Picker.Item className="h-24 w-24 bg-white text-white" label="acción" value="acción" />
                <Picker.Item className="h-24 w-24 bg-white text-white" label="fantasía" value="fantasía" />
            </Picker>

            <Picker style={{ height: 24, width: '100%', backgroundColor: '#FFFFFF', itemColor: 'white' }}   
                selectedValue={rating}
                onValueChange={(itemValue, itemIndex) =>
                setRating(itemValue)
            }>
                <Picker.Item className="h-24 w-24 bg-white text-white" label="menor a 3" value="menor a 3" />
                <Picker.Item className="h-24 w-24 bg-white text-white" label="mayor a 3" value="mayor a 3" />
            </Picker>

        </ScrollView>
)}