import { Text, ScrollView, TextInput, View, Image } from "react-native"
import { useState } from 'react';
import MoviesGrid from "../components/MoviesGrid";
import { Picker } from "@react-native-picker/picker";
import HomeButton from "../components/HomeButton";
import { useEffect } from 'react';



export default function MovieDetails({ navigation,route }) {

    const [branch, setBranch] = useState("Sucursal");
    const [day, setDay] = useState("Dia");
    const [amount, setAmount] = useState("Cantidad");
    const { mail, id_funcion } = route.params;
  console.log("mail:", mail);
  console.log("id_funcion:", id_funcion);
  const [movieDetails, setMovieDetails] = useState(null);
  const [sucursales, setSucursales] = useState([]);

  useEffect(() => {
    fetchMovieDetails();
    fetchSucursales();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/api/functions/${id_funcion}/getbyid`);
      if (response.ok) {
        const data = await response.json();
        setMovieDetails(data);
      } else {
        console.error('Error al obtener los detalles de la película:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  console.log(movieDetails);

  const fetchSucursales = async () => {
    try {
        console.log("titulo sin codear:",movieDetails.titulo);
      const titulo = encodeURIComponent(movieDetails?.titulo);
      console.log("titulo codeado?",titulo);
      const response = await fetch(`https://backendmobile-production.up.railway.app/api/sucursales/${titulo}/getsucursalesbypelicula`);
      if (response.ok) {
        const data = await response.json();
        setSucursales(data);
        
      } else {
        console.error('Error al obtener las sucursales:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

console.log("sucursales:",sucursales)
    return (

        <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ backgroundColor: "rgb(17 24 39)", flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>

                <View style={{ width: "80%", marginLeft: "5%" }}>

                    <Image source={{ uri: `data:image/jpeg;base64,${movieDetails?.imagen}` }} style={{ width: "100%", height: "35%", aspectRatio: 2 / 3, resizeMode: "contain" }} />

                    <View className='flex-row-reverse'>

                        <View className='flex-col ' style={{ alignItems: 'flex-end', marginTop: -180, marginLeft: 100 }}>
                            <View style={{ width: 80, height: 80, borderRadius: 45, backgroundColor: "white", marginBottom: 10 }}>
                                <Text className='text-sm text-black text-center mt-4'>{movieDetails?.genero}</Text>
                            </View>
                            <View style={{ width: 80, height: 80, borderRadius: 45, backgroundColor: "white" }}>
                                <Text className='text-black text-sm text-center mt-4'>Duracion 120'</Text>
                            </View>


                        </View>

                    </View>

                    <View style={{ flexDirection: "column", marginTop: 10 }}>
                        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>{movieDetails?.titulo}</Text>

                        <Text style={{ color: "white", fontSize: 16, textAlign: "left", marginTop: 10 }}>
                            Sinopsis de la película: {movieDetails?.descripcion}
                        </Text>

                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", textAlign: "left", marginTop: 10 }}>
                            Puntuación: 5.0
                        </Text>

                        <Picker
                            style={{ height: 40, width: '90%', backgroundColor: 'gray', marginBottom: 10, marginTop: 20, color: 'white', borderRadius: 10 }}
                            selectedValue={branch}
                            onValueChange={(itemValue, itemIndex) => setBranch(itemValue)}


                        >
                            <Picker.Item label="Seleccionar sucursal" />
                            <Picker.Item label="Cinemark Palermo" value="Cinemark Palermo" />
                            <Picker.Item label="Hoyts Caballito" value="Hoyts Caballito" />
                        </Picker>

                        <Picker
                            style={{ height: 40, width: '90%', backgroundColor: 'gray', marginBottom: 10, marginTop: 10, color: 'white', borderRadius: 10 }}
                            selectedValue={amount}
                            onValueChange={(itemValue, itemIndex) => setAmount(itemValue)}


                        >
                            <Picker.Item label="Seleccionar cantidad" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                        </Picker>

                        <Picker
                            style={{ height: 40, width: '90%', backgroundColor: 'gray', marginBottom: 10, marginTop: 10, color: 'white', borderRadius: 10 }}
                            selectedValue={day}
                            onValueChange={(itemValue, itemIndex) => setDay(itemValue)}

                        >
                            <Picker.Item label="Seleccionar dia" />
                            <Picker.Item label="Vie-14 de julio - 18:00hs" value="Vie-14 de julio - 18:00hs" />
                            <Picker.Item label="Sab-15 de julio - 14:00hs" value="Sab-15 de julio - 14:00hs" />
                            <Picker.Item label="Sab-15 de julio - 17:00hs" value="Sab-15 de julio - 17:00hs" />

                        </Picker>



                    </View>


                </View>

            </View>

            <View className='mt-5'>

                <HomeButton color='#FF3131' title='Siguiente' handler={() => navigation.navigate({ name: 'Select Seats' })} ></HomeButton>

            </View>


        </ScrollView>

    );
}