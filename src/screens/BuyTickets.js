import { Text, ScrollView, TextInput, View, Image } from "react-native"
import { useState } from 'react';
import MoviesGrid from "../components/MoviesGrid";
import { Picker } from "@react-native-picker/picker";
import HomeButton from "../components/HomeButton";


export default function MovieDetails({ navigation }) {

    const [branch, setBranch] = useState("Sucursal");
    const [day, setDay] = useState("Dia");
    const [amount, setAmount] = useState("Cantidad");


    return (

        <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ backgroundColor: "rgb(17 24 39)", flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>

                <View style={{ width: "80%", marginLeft: "5%" }}>

                    <Image source={require("../images/theDarkKnight.jpeg")} style={{ width: "100%", height: "35%", aspectRatio: 2 / 3, resizeMode: "contain" }} />

                    <View className='flex-row-reverse'>

                        <View className='flex-col ' style={{ alignItems: 'flex-end', marginTop: -180, marginLeft: 100 }}>
                            <View style={{ width: 80, height: 80, borderRadius: 45, backgroundColor: "white", marginBottom: 10 }}>
                                <Text className='text-sm text-black text-center mt-4'> Genero Accion</Text>
                            </View>
                            <View style={{ width: 80, height: 80, borderRadius: 45, backgroundColor: "white" }}>
                                <Text className='text-black text-sm text-center mt-4'>Duracion 120'</Text>
                            </View>


                        </View>

                    </View>

                    <View style={{ flexDirection: "column", marginTop: 10 }}>
                        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>El caballero oscuro</Text>

                        <Text style={{ color: "white", fontSize: 16, textAlign: "left", marginTop: 10 }}>
                            Sinopsis de la película: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt justo ac ligula scelerisque varius.
                            Nullam in fringilla tellus.
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