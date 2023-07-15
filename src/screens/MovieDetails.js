import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import HomeButton from "../components/HomeButton";
import { useEffect, useState } from 'react';

export default function MovieDetails({ navigation, route }) {
  const { mail, id_funcion } = route.params;
  console.log("mail:", mail);
  console.log("id_funcion:", id_funcion);
  const [movieDetails, setMovieDetails] = useState(null);
  const [peliculaId, setPeliculaId] = useState('');

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/api/functions/${id_funcion}/getbyid`);
      if (response.ok) {
        const data = await response.json();
        setMovieDetails(data);

        fetchPeliculaId();
      } else {
        console.error('Error al obtener los detalles de la película:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  console.log(movieDetails);

  const fetchPeliculaId = async () => {
    try {
      const response = await fetch(`https://backendmobile-production.up.railway.app/funciones/${id_funcion}/pelicula`);
      if (response.ok) {
        const data = await response.json();
        if (data && data.peliculaId) {
          setPeliculaId(data.peliculaId);
        } else {
          console.error('ID de película inválido');
        }
      } else {
        console.error('Error al obtener el ID de la película:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };


  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }} style={{ backgroundColor: "rgb(17 24 39)", flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>

        <View style={{ width: "80%", marginLeft: "5%" }}>

          <Image source={{ uri: `data:image/jpeg;base64,${movieDetails?.imagen}` }} style={{ width: "100%", height: "45%", aspectRatio: 2/3, resizeMode: "stretch" }} />

          <View className= 'flex-row-reverse'>

          <View className='flex-col ' style={{alignItems:'flex-end', marginTop: -180, marginLeft: 100}}>
            <View style={{ width: 80, height: 80, borderRadius: 45, backgroundColor: "white", marginBottom: 10}}> 
            <Text className='text-sm text-black text-center mt-4'>{movieDetails?.genero}</Text>
            </View>
            <View style={{width: 80, height: 80, borderRadius: 45, backgroundColor: "white" }}> 
            <Text className='text-black text-sm text-center mt-4'>Duracion 120'</Text>
            </View>

           
          </View>

          </View>
          
          <View style={{ flexDirection: "column", marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>{movieDetails?.titulo}</Text>

            <Text style={{ color: "white", fontSize: 16, textAlign: "left", marginTop: 10 }}>
            Sinopsis: {movieDetails?.descripcion}
            </Text>

            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", textAlign: "left", marginTop: 10 }}>
              Puntuación: 5.0
            </Text>

            

            <TouchableOpacity onPress={() => navigation.navigate('Comments', { id_funcion: id_funcion, mail: mail, peliculaId: peliculaId })}>
            
             <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", textAlign: "left", marginTop: 10 }}>
              Ver comentarios (2)
            </Text>
            </TouchableOpacity>

          </View>

        
        </View>

      </View>

      <HomeButton color='#FF3131' title='Comprar entradas' handler={()=>navigation.navigate({name:'Buy Tickets'})}></HomeButton>
    </ScrollView>
  );
}
